/**
 * 関数の書き方
 */

// 関数の基本形


// 引数の渡し方

// 省略された引数とデフォルト値

// 任意の個数の引数

// 【001】関数のオーバーロード
console.log( '\n【001】関数のオーバーロード' );
{
    function formatInput( input : string ) : string;
    function formatInput( input : number ) : string;
    
    // 実装
    function formatInput( input : string | number ) : string {

        if( typeof input == 'number' ) {
            return input.toFixed( 2 ); // 数値のとき 小数点(2桁)を整えて文字列にする
        }

        return input.trim(); // 文字列ならば、前後の半角スペースを消す
    }

    const r01 = formatInput( "  Hello       " ); // --> 'Hello'
    const r02 = formatInput( 123 ); // --> '123.00'

    console.log( `r01=${r01}, r02=${r02}` );

    // formatInput( true ); // ❌ エラー：boolean のパターンは定義されていない

}

// アロー関数

// thisの利用方法
// thisは、「thisの文脈」や「実行文脈」「thisのコンテキスト（Context）」と呼ばれる

// 「thisのバインド（束縛：Binding）」
// this が具体的にどのオブジェクトを指し示しているか（中身の参照先がどこか）を決める仕組み

// this引数（this parameter）
// TypeScriptの関数では、最初の引数に偽の this を書いて、その関数が「どんなオブジェクトの
// 文脈で呼ばれるべきか」を型定義できます。これをthis引数と呼びます。

// this型（this type）
// クラスのメソッドの中で、戻り値の型として自分自身のクラス（インスタンス）を指し示したいときに
// 使う型をthis型と呼びます。
{
    class Counter {
        count = 0;
        increment() : this {
            this.count ++;
            return this;
        }
    }
    const counter = new Counter();
    counter.increment().increment().increment(); // メソッドを3回つなげる( メソッドチェーン )
}
// JavaScript/TypeScriptの this は、「関数が『定義されたとき』ではなく、『呼び出されたとき』の状況に
// よって中身（バインド先）がコロコロ変わる」という非常に特殊な性質を持っています。
// そのため、次のような「言葉」が使われています。
// (1)「thisが迷子になる / thisが壊れる」
// 関数を別の変数にコピーして呼び出した結果、this の中身が意図せずundefined などになってしまう現象。
// (2) 「アロー関数でthisを固定する」
// アロー関数（ => ）は this を新しく作らず、外側の this をそのまま引き継ぐ（レキシカルスコープ）という
// 性質を利用して、迷子になるのを防ぐテクニック。

// 『this』とは？
// 初心者向けに「わかりやすさ」を優先した説明
// ★ 「this」とは functionが動作する時点で functionが依存している実体のこと。
// functionが動作する時点で、「this」が「何」なのかを教える行為が「bind」と呼ばれます
// （非厳密モードのとき)bindがなされていないfunctionの中で「this」を使うと、勝手に一番外側の実体が「this」になります
// 一番外側の実体とは、ブラウザでいうと「window」, Node.jsでいうと「global」になります。
// (厳密モードのとき)、bindしていないときは this は undefinedになるので事実上うまく動作しません。
// Typescriptは、厳密モードで動くので、thisは undefinedになります。
{
    // 「this」をbindする事例
    console.log( '「this」をbindする事例' );
    interface Test {
        speech( word : string ) : void;
    }
    function test( this : Test ) {
        console.log( 'this=', this );
        this.speech( 'Hello' );
    }

    const obj = { speech: ( word : string )=>{console.log( word );} };

    const testBinded = test.bind( obj );
    testBinded();

    // bindしていないとき
    // test(); // --> ❌ エラー：thisの割り当てがない！、強引に動かすと、thisはundefinedになり、speechプロパティがないのでエラーが起きる
}