/**
 * 配列の定義
 * 配列の繰返し処理 
 */


// 【001】空の配列に要素を追加する練習
console.log('【001】空の配列に要素を追加する練習');
// 配列を定義（要素の型は string )
const arr: string[] = [];
// 配列に要素を追加
arr.push('A');
arr.push('BB');
arr.push('CCC');
arr.push('DDDD');
arr.push('EEEEE');
// 配列の要素数
const arrLength = arr.length;
console.log('arrLength=', arrLength);
console.log('arr=',arr);
// 配列の要素を順に表示する
arr.forEach((value:string, index:number)=>{
    console.log('index=',index, ', value=', value);
});

// 【002】(filter) 条件に合致する要素を抽出して配列にする練習
console.log('【002】条件に合致する要素を抽出して配列にする練習');
// 長さが2より大の要素を抽出する
const arr2 = arr.filter((value:string)=>{
    return value.length > 2
});
console.log('arr2=', arr2);

// 【003】配列の要素を並び替える（ソート）練習
console.log('【003】配列の要素を並び替える（ソート）練習');
arr.sort((a: string, b: string): number=>{
    if( a.length > b.length) {
        return -1;
    }else if( a.length < b.length){
        return 1;
    }else{
        return 0;
    }
});
console.log('arr=', arr);

// 【004】配列の要素に含まれているか調べる練習
console.log('【004】配列の特定の要素を削除する練習');
if( arr.includes('BB')) {
    console.log('BBは arr に含まれている' );
}else{
    console.log('BBは arr に含まれていない' );
}

// 【005】配列の要素を削除する練習
console.log('【005】配列の要素を削除する練習');
// 先頭の要素を削除する
const firstElement = arr.shift();
console.log(`要素(${firstElement})を削除。`, 'arr=', arr);
const unshiftCount = arr.unshift('XXXXX','ZZZZZZZ');
console.log(`要素を追加して要素数が(${unshiftCount}個)になった。`, 'arr=', arr);
