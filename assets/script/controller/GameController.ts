import { _decorator, Component, Node } from 'cc';
import { GameModel } from '../model/GameModel';
import { PlayerData } from '../utils/PlayerData';
import { SelectLevelUIController } from '../UI/SelectLevelUIController';
import { UIController } from '../UI/UIController';
import { LevelController } from '../levelController/LevelController';
import { WinUIController } from '../UI/WinUIController';
import { PlayerSave } from '../utils/PlayerSave';
import { Configs } from '../utils/Configs';
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

        this.setUpLevelWinUI();

        this.setUpOnClickNextlevelWinUI();
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
        this.gameModel.playingLevelNode.destroy();

        this.gameModel.uiNode.getComponent(UIController).onHideLevelList();

        this.gameModel.levelLb.string = 'Level ' + level;
        this.gameModel.loadLevel(level);
    }

    setUpLevelWinUI() {
        this.gameModel.playingLevelNode.getComponent(LevelController).setUp(this.showWinUI);
    }

    showWinUI() {
        this.gameModel.winUI.active = true;
    }

    setUpOnClickNextlevelWinUI() {
        this.gameModel.winUI.getChildByName("WinUIController").getComponent(WinUIController).setUp(this.onClickNextLevelWinUI);
    }

    onClickNextLevelWinUI() {
        let level = this.gameModel.playingLevelNode.getComponent(LevelController).whichLevel;
        this.gameModel.playingLevelNode.destroy();

        if (level < PlayerData.instance.currentReachLevel) {
            this.gameModel.levelLb.string = 'Level ' + (level + 1);
            this.gameModel.loadLevel(level + 1);
        }

        if (level == PlayerData.instance.currentReachLevel) {
            PlayerData.instance.currentReachLevel = level + 1;
            this.gameModel.levelLb.string = 'Level ' + PlayerData.instance.currentReachLevel;
            this.gameModel.loadLevel(PlayerData.instance.currentReachLevel);

            PlayerSave.saveDataStorage(Configs.KEY_STORAGE_CURRENT_LEVEL, PlayerData.instance.currentReachLevel);
        }

        this.gameModel.winUI.active = false;
    }

    update(deltaTime: number) {

    }
}


