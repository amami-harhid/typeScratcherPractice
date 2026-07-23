/**
 * 画像を読み込みスプライトのコスチュームにする
 */

import { Typescratcher as Ts } from "@tscratch3/typescratcher";
import { Sprite } from "@tscratch3/typescratcher";
import { AppleImage } from "./sub/images";

// スプライトを作る
const apple = new Ts.Sprite("sprite");
apple.Costume.add([AppleImage]);

const _test = async function* (this: Sprite) {
    for (;;) {
        this.Motion.move.steps(5);
        yield;
    }
};
apple.Event.flagPresser().func = _test;

// 開始
Ts.engine.start();
