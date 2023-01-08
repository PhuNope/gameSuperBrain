import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIController')
export class UIController extends Component {
    @property(Label)
    levelLabel: Label;

    @property(Node)
    btnShowLevel: Node;

    @property(Node)
    selectLevelUI: Node;

    start() {
        this.selectLevelUI.active = false;
        this.btnShowLevel.active = true;
    }

    onShowLevelList() {
        this.btnShowLevel.active = false;
        this.selectLevelUI.active = true;

    }

    onHideLevelList() {
        this.btnShowLevel.active = true;
        this.selectLevelUI.active = false;
    }

    update(deltaTime: number) {

    }
}


