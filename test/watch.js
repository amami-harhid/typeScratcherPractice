import { createServer } from 'vite';
import { pathToFileURL } from 'url';
import path from 'path';
import process from 'node:process';

async function watchAndRun() {
    const targetFile = process.argv[2] || './test/001/index.ts';
    const absolutePath = path.resolve(targetFile);

    // Viteの開発サーバーをミドルウェアモードで起動
    const vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
    });

    async function execute() {
        console.clear(); // 画面をクリア（お好みで）
        console.log(`\n🚀 [Vite連動] 実行中: ${targetFile}\n------------------------`);
        try {
            // キャッシュをクリアしてモジュールを再読み込み（実質的なホットリロード）
            const moduleId = pathToFileURL(absolutePath).href;
            await vite.ssrLoadModule(moduleId);
        } catch (e) {
            console.error('実行エラー:', e);
        }
        console.log(`\n------------------------\n👀 保存を監視中... (Ctrl+C で終了)`);
    }

    // 初回実行
    await execute();

    // Viteのファイル watcher を使って、対象ファイルが保存されたら再実行
    vite.watcher.add(absolutePath);
    vite.watcher.on('change', async (filePath) => {
        if (path.resolve(filePath) === absolutePath) {
            await execute();
        }
    });
}

watchAndRun();