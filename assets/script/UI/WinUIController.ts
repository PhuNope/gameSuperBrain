import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('WinUIController')
export class WinUIController extends Component {
    @property(Node)
    winUINode: Node;

    onNextLevelCallBack: CallableFunction;

    start() {

    }

    setUp(onNextLevel: CallableFunction) {
        this.onNextLevelCallBack = onNextLevel;
    }

    onNextLevel() {
        this.onNextLevelCallBack();
    }

    update(deltaTime: number) {

    }
}


