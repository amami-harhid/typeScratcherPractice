/**
 * let宣言とカウントアップ 
 */

/** カウンター */
let counter = 0;
for(;;) {
    counter += 1;
    if( counter > 20 ) {
        break;
    }
    console.log(`counter=${counter}`);
}
