"use strict";

/**
 * Generator関数
 * 
 */

export function* test() {
    console.log( 'START' );
    for( let idx = 0 ; idx < 4; idx++ ) {
        console.log( 'idx=', idx );
        yield; // <== 一旦停止するところ
    }
}
