import { _decorator, Component, Node } from 'cc';
import { LevelController } from './LevelController';
const { ccclass, property } = _decorator;

@ccclass('level1')
export class level1 extends LevelController {

    start() {
        //this.onNextLevel();
        //this.winCallback();
    }
    //test
    public onClick() {
        if (this.winCallback) this.winCallback();
    }

    update(deltaTime: number) {

    }
}


