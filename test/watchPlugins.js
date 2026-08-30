// 💡 実行時にコードを書き換えるカスタムViteプラグイン
export const insertSleepPlugin = {
    name: 'insert-sleep-to-loops',
    enforce: 'post',
    transform(code, id) {
        if (!id.endsWith('.ts')) return null;

        let modifiedCode = code;
        // 💡 1. 最初に「async function*」や「function*」の宣言ブロックそのものを保護するため、
        //      ジェネレーター関数の内側ではなく、プレーンなループ構造のみを正規表現で走査します。
        // 💡 改良版：文字列の中の yield に騙されないロジック
        modifiedCode = modifiedCode.replace(
            /(for|while)\s*\((.*?)\)\s*\{([^]*?)\}/g,
            (match, loopType, cond, body) => {
        
                // 💡 /\byield\b/ を使うことで、独立した単語（命令）としての yield のみを探す。
                // さらに、簡易的にクォーテーションで囲まれた文字列（"yield" や 'yield'）を
                // 判定から除外するか、あるいは単語境界を厳しくします。
        
                // ※ 最も確実なのは、body から文字列リテラルを一旦消去して判定することです。
                const bodyWithoutStrings = body.replace(/(["'`])(.*?)\1/g, '');

                if (cond.includes('yield') || /\byield\b/.test(bodyWithoutStrings)) {
                    return match; // ジェネレーター構文なのでスキップ
                }

                if (bodyWithoutStrings.includes('function*')) {
                    return match;
                }

                return `${loopType} (${cond}) { 
                    ${body};
                    globalThis.__loopCount = (globalThis.__loopCount || 0) + 1;
                    if (globalThis.__loopCount > 1000) {
                        console.log('⚠️ ループ処理が10秒経過しましたので無限ループと判断し、強制BREAKしました。コードを修正して再保存してください。');
                        break;
                    }
                    await new Promise(r => setTimeout(r, 10)); 
                }`;
            }
        );
        //console.log(modifiedCode)
        return { code: modifiedCode, map: null };
    }
};