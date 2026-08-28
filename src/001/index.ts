/**
 * 画像を読み込みスプライトのコスチュームにする
 */

import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import type { Sprite } from "@tscratch3/typescratcher";

// 画像読み込み
import { AppleImage } from "./sub/images";

// スプライトを作る
const apple = new Ts.Sprite( "sprite" );
apple.Costume.add( AppleImage );
// 位置決め（初期）
apple.Motion.move.to( [ 0, 0 ] );

//「apple」イベントスレッド
const _test = function( this : Sprite ) {
    // 位置決め（初期）
    apple.Motion.move.to( [ 0, 0 ] );
    // ずっと繰り返す
    for ( ;; ) {
        // 5 進む
        this.Motion.move.steps( 5 );
    }
};
// 旗が押されたときのイベントスレッドを設定
apple.Event.flagPresser().func = _test;

// 開始
Ts.engine.start();
