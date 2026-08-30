import { createServer } from 'vite';
import { pathToFileURL } from 'url';
import path from 'path';
import process from 'node:process';
import { insertSleepPlugin } from './watchPlugins.js';

async function watchAndRun() {
    // 💡 ユーザーが指定した生の引数（例: ./test/009/index.ts）
    const rawTargetFile = process.argv[2] || './test/001/index.ts';
    const absolutePath = path.resolve(rawTargetFile);
    // ./test フォルダをルートにする
    const testRoot = path.resolve('./test');
    // 💡 Vite（root: ./test）から見た相対パス（例: 009/index.ts）を計算する
    const viteRelativePath = path.relative(testRoot, absolutePath);
    // 💡 Viteの内部監視システムに適合する絶対パス（./test を起点にした絶対パス）
    const viteAbsolutePath = path.join(testRoot, viteRelativePath);

    // Viteの開発サーバーをミドルウェアモードで起動
    const vite = await createServer({
        root: testRoot, 
        configFile: false, 
        server: { middlewareMode: true },
        appType: 'custom',
        plugins: [insertSleepPlugin] 
    });

    async function execute() {
        console.clear(); 
        console.log(`\n🚀 [Vite連動] 実行中: ${rawTargetFile}\n------------------------`);        
        globalThis.__loopCount = 0;
        try {
            // 💡 【重要】Viteの内部キャッシュから、対象ファイルの情報を完全に削除する
            const moduleNode = vite.moduleGraph.getModuleById(absolutePath);
            if (moduleNode) {
                vite.moduleGraph.invalidateModule(moduleNode); // ⭕️ キャッシュを無効化
            }
            const moduleId = pathToFileURL(absolutePath).href;
            //console.log('moduleId=', moduleId);        
            await vite.ssrLoadModule(moduleId);
        } catch (e) {
            console.error('\n❌ 実行エラー:', e.message || e);
        }
        console.log(`\n------------------------\n👀 保存を監視中... (Ctrl+C で終了)`);
    }
    // 1. 初回実行
    await execute();

    // 2. 💡 Viteのファイル監視（watcher）に絶対パスで登録してイベントを拾う
    vite.watcher.add(viteAbsolutePath);
    
    vite.watcher.on('change', async (changedPath) => {
        // 変更されたファイルのパスを絶対パスに統一して比較する
        if (path.resolve(changedPath) === absolutePath) {
            await execute();
        }
    });
}

watchAndRun();