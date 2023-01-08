import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelController')
export class LevelController extends Component {
    @property({ type: Number })
    protected whichLevel: number;
    protected showWinUI: CallableFunction;

    protected setUp(showWinUI: CallableFunction) {
        this.showWinUI = showWinUI;
    }

    protected onNextLevel() {
        this.showWinUI();
    }
    update(deltaTime: number) {

    }
}


