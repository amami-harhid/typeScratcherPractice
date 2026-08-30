/**
 * 次のコマンドで実行する
 * node ./test/005/index2.cjs 
 */

// 「this」をbindする事例
console.log( '「this」をbindする事例' );
function test() {
    console.log( 'this=', this );
}
// bindしていないとき
test(); // --> ❌ エラー：thisの割り当てがない！、強引に動かすと、thisはundefinedになり、speechプロパティがないのでエラーが起きる
