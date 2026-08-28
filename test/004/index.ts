/**
 * MAPの定義
 */

// 【001】空のMAPを定義
console.log('【001】空のオブジェクトを定義');
const map = new Map<string, number>();
console.log('map=', map);

// 【002】キー付きで要素を追加
console.log('【002】キー付きで要素を追加');
map.set( 'AAAA', 100);
console.log('map=', map, ', size=',map.size);
map.set( 'BBB', 101);
console.log('map=', map, ', size=',map.size);
map.set( 'CCC', 102);
console.log('map=', map, ', size=',map.size);
