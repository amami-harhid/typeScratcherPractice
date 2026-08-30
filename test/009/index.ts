/**
 * Generator関数
 * 
 */
import { test } from "./generatorSample";
const gen = test(); // Generator生成

gen.next(); // <-- 1回目の実行  'START idx= 0'
gen.next(); // <-- 2回目の実行  'idx= 1'
gen.next(); // <-- 3回目の実行  'idx= 2'  
gen.next(); // <-- 3回目の実行  'idx= 3'  
gen.next(); // <-- 4回目の実行  何も起こらない 

console.log( "==== 再生成 ====" );
const gen02 = test(); // Generator再度の生成    

for ( const _ of gen02 ) {
    console.log( ' --- [01] yieldの合間---' );
}

for ( const _ of gen02 ) {
    console.log( ' --- [02] YIELD の合間 ---' ); // <=== これは出力されない
}

console.log( "==== 再生成その２ ====" );
const gen03 = test(); // Generator再度の生成

for ( ;; ) {
    const rtn = gen03.next();
    if( rtn.done === true ) 
        break;
}


