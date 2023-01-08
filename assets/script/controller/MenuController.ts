import { _decorator, Component, director, Node } from 'cc';
import { Configs } from '../utils/Configs';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {

    start() {
    }

    private onClickStartGame() {
        director.loadScene(Configs.GAME_SCENE_NAME);
    }

    update(deltaTime: number) {

    }
}


