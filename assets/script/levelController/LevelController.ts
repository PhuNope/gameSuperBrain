import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelController')
export class LevelController extends Component {
    @property({ type: Number })
    public whichLevel: number;
    public showWinUI: CallableFunction;

    public setUp(showWinUI: CallableFunction) {
        this.showWinUI = showWinUI;
    }

    public onShowWinUI() {
        this.showWinUI();
    }

    update(deltaTime: number) {

    }
}


