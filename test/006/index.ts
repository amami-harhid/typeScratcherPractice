/**
 * タプルの使用
 * 
 * タプルとは
 * ・順序がある: 要素が並ぶ順番が決まっており、何番目かを指定して値を取り出せます
 * ・変更できない（イミュータブル）: 一度作ったあとに、中の値を書き換えたり、新しく追加・削除したりできません。
 * ・数値、文字、真偽値（正しい・間違いを表す値）などを一緒にまとめられます。
 */

// 【001】Typescriptのタプル
console.log( '\n【001】Typescriptのタプル' );
{
    // TypeScriptのタプル型（1番目は文字列、2番目は数値、要素は2つだけと定義）
    const user : [string, number] = [ "Alice", 30 ];
    console.log( 'タプル user=', user );

}

// 【002】Typescriptのタプル,要素が３個
console.log( '\n【002】Typescriptのタプル,要素が３個' );
{
    // TypeScriptのタプル型（1番目は文字列、2番目は数値、3番目は boolelan）
    const user : [string, number, boolean] = [ "Alice", 30, true ];
    console.log( 'タプル user=', user );
}

// 【003】Typescriptの厳密なタプル(更新不可)
console.log( '\n【003】Typescriptのタプルの利用方法' );
{
    // 値(右)に as const をつける
    const user = [ "Alice", 30, true ] as const;
    console.log( 'タプル user=', user );
    const [ name, age, isAlive ] = user;
    // name = 'Tom';  // ❌ エラー！：コンスタントのため代入できません
    console.log( `name=${name}, age=${age}, isAlive=${isAlive}` );

    // 型に readonly をつける
    const user02 : readonly [string, number, boolean] = [ "Alice", 30, true ];
    const [ name02, age02, isAlive02 ] = user02;
    // name02 = 'Tom';      // ❌ エラー！：コンスタントのため代入できません
    // age02 = 150;         // ❌ エラー！：コンスタントのため代入できません
    // isAlive02 = false;   // ❌ エラー！：コンスタントのため代入できません
    console.log( `name02=${name02}, age02=${age02}, isAlive02=${isAlive02}` );
    // user02[0] = 'Tom';   // ❌ エラー！：読み取り専用プロパティのため 添え字 0 は使えません
    console.log( 'user02=', user02 );

    // readonly,  as const の両方をつけてもよい
    const user03 : readonly [string, number, boolean] = [ "Alice", 30, true ] as const;
    // user03[0] = 'Tom'; // エラー！：読み取り専用プロパティのため 添え字 0 は使えません
    const [ name03, age03, isAlive03 ] = user03;
    // name03 = 'Tome'; // ❌ エラー！：コンスタントのため代入できません
    console.log( `name03=${name03}, age03=${age03}, isAlive03=${isAlive03}` );

}

// リテラル型オブジェクトの事例（厳密なタプルではない）
{
    // リテラル型オブジェクトでも 変更不可、様々な型を混在できる！を実現できますが
    // 順番性がない = 配列でない！のでタプルとは呼べません。
    console.log( '\n リテラル型オブジェクトの事例' );
    const sample = { name:'Alice', age: 15 } as const;
    // sample.name = 'Bob'; // ❌ エラー！：読み取り専用プロパティのため代入できません。
    console.log( sample.name );
}

// タプル型ならではの使用用途（ リテラル型オブジェクトではできないこと )
// (1) 使う側が「変数名を自由に決められる」（分割代入の相性が最強）
// オブジェクトの場合、値を取り出すときにデータを作った人が決めたキー名に縛られます。
// しかしタプルの場合、データを受け取る側がその場で好きな変数名をつけられます。
// 「0番目は値、1番目は関数」という順番だけが決まっている（タプルである）からこそ、
// 使う側が一番都合の良い名前でサクッと受け取れて参照することができます。
{
    console.log( '\n (1) 使う側が「変数名を自由に決められる」' );
    // 1番目、2番目, 3番目の固定値の意味しかない、これがタプル。
    const colorCount = [ 0, 50, 150 ] as const;
    // そのときどきで、好きな名前をつけることができる
    const [ redCount, greenCount, blueCount ] = colorCount;
    console.log( redCount, greenCount, blueCount );
}
// (2) 一瞬で「別の形」に一括変換・ループ処理できる
// タプルは中身が「配列」なので、配列が持つ強力な便利メソッド（.map() や .forEach() など）を
// そのまま使えます。
// 例：3次元の座標データ（X, Y, Z）を加工したいときの事例
{
    console.log( '\n (2) 一瞬で「別の形」に一括変換・ループ処理できる' );
    // 3次元の座標をタプルで表現（順番が X, Y, Z と決まっている）
    const point3D = [ 10, 20, 30 ] as const;
    // ⭕ タプルの場合：すべての数値を一発で2倍にする、といった計算が1行でできる
    const doubledPoint = point3D.map( value => value * 2 );
    console.log( doubledPoint ); // [20, 40, 60]
}
// (3) 関数が「複数の別々のデータ」を同時に返せる
// プログラミングの言語的なルールとして、関数が一度に外へ返せる（return できる）値は1つだけです。
// しかし、「計算結果の数値」と「エラーメッセージの文字列」の2つを同時に返したいケースがよくあります。
// オブジェクトを作るまでもない小さな処理のとき、タプルを使えばスマートに解決します。
{
    console.log( '\n (3) 関数が「複数の別々のデータ」を同時に返せる' );
    // 割り算をして「結果」と「エラーメッセージ」のペアを返す関数
    function divide( a : number, b : number ) : readonly [number | null, string | null] {
        if ( b === 0 ) {
            return [ null, "0で割ることはできません" ] as const; // タプルで返す
        }
        return [ a / b, null ] as const;
    }
    // 使う側：サクッと2つの変数に分けて受け取れる
    const [ result, error ] = divide( 10, 0 );
    console.log( result, error ); // result-> null, error-> "0で割ることはできません"
}
