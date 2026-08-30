// 【001】空のMAPを定義
console.log( '\n【001】空のMAPを定義' );
const map = new Map<string, number>();
console.log( 'map=', map );

// 【002】MAP:キー付きで要素を追加
console.log( '\n【002】MAP:キー付きで要素を追加' );
map.set( 'AAAA', 100 );
console.log( 'map=', map, ', size=', map.size );
map.set( 'BBB', 101 );
console.log( 'map=', map, ', size=', map.size );
map.set( 'CCC', 102 );
console.log( 'map=', map, ', size=', map.size );

// 【003】MAP:キーと要素を削除
console.log( '\n【003】MAP:キーと要素を削除' );
// 存在するキーを使って削除(削除される確認)
const result01 = map.delete( "BBB" );
console.log( 'map=', map, ', size=', map.size, ', 削除結果=', result01 );
// 存在しないキーを使って削除(削除されない確認)
const result02 = map.delete( "XXX" ); 
console.log( 'map=', map, ', size=', map.size, ', 削除結果=', result02 );

// 【004】MAP:要素の値を変更
console.log( '\n【004】MAP:要素の値を変更' );
map.set( "CCC", 1102 );
console.log( 'map=', map, ', size=', map.size );

const x : number = parseInt( "XXX" );
if( Number.isNaN( x ) ) {
    console.log( '数値ではありません' ); // --> 実行される
}

// 【005】分割代入
console.log( '\n【005】分割代入' );
const user = { name: 'Alice', age: 30 };

const { name } = user;
const { age } = user;
const { name: name2 } = user;
console.log( `name=${name}, age=${age}, name2=${name2}` );

// 【006】配列の分割代入
console.log( '\n【006】配列の分割代入' );
const testList : ( string | number )[] = [ 'Hoge', 20, 'Fuuuga' ];
const [ elem01, ...elems02 ] = testList;
console.log( `elem01= ${elem01}`, 'elems02=', elems02 );

// 【007】論理値の反転
console.log( '\n【007】論理値の反転' );
let isActive : boolean = true;

for( let idx=0; idx<3; idx++ ) {
    isActive = isActive == false;
    console.log( `isActive=${isActive}` );
}

for( let idx=0; idx<3; idx++ ) {
    isActive = !isActive;
    console.log( `isActive=${isActive}` );
}
