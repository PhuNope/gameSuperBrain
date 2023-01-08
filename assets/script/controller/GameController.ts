import { _decorator, Component, Node } from 'cc';
import { GameModel } from '../model/GameModel';
import { PlayerData } from '../utils/PlayerData';
import { SelectLevelUIController } from '../UI/SelectLevelUIController';
import { UIController } from '../UI/UIController';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property(Node)
    gameModelNode: Node;
    gameModel: GameModel;

    start() {
        this.gameModel = this.gameModelNode.getComponent(GameModel);
        this.beginLevel();

        this.setUpLevelList();
    }

    beginLevel() {
        this.gameModel.levelLb.string = 'Level ' + PlayerData.instance.currentReachLevel;
        this.gameModel.loadLevel(PlayerData.instance.currentReachLevel);
        //ResourceUtils.reloadResource();
    }

    setUpLevelList() {
        this.gameModel.selectLevelUI.getComponent(SelectLevelUIController).setUpLevelItem(this.onClickLevelItem);
        this.gameModel.selectLevelUI.getComponent(SelectLevelUIController).createLevelItemList();

        console.log(this.gameModel.gamePlay);
        console.log(this.gameModel.uiNode);
        console.log(this.gameModel.playingLevelNode);

        console.log(this.gameModel.gamePlay.getChildByName("lv1"));

    }

    onClickLevelItem(level: number) {
        //this.gameModel.playingLevelNode.destroy();

        this.gameModel.uiNode.getComponent(UIController).onHideLevelList();

        this.gameModel.levelLb.string = 'Level ' + level;
        this.gameModel.loadLevel(level);
    }

    update(deltaTime: number) {

    }
}


