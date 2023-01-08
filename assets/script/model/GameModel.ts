import { _decorator, Component, Node, Label, Prefab, instantiate } from 'cc';
import { PlayerData } from '../utils/PlayerData';
import { ResourceUtils } from '../utils/ResourceUtils';
import { GameController } from '../controller/GameController';
import { LevelController } from '../levelController/LevelController';
const { ccclass, property } = _decorator;

@ccclass('GameModel')
export class GameModel extends Component {
    @property(Node)
    public uiNode: Node;
    @property(Label)
    public levelLb: Label;
    @property(Node)
    public gamePlay: Node;
    @property(Node)
    public winUI: Node;

    @property(Node)
    public selectLevelUI: Node;
    //
    public playingLevelNode: Node;
    //
    start() {
        this.winUI.active = false;
    }

    public async loadLevel(whichLevel: number) {
        let path = 'level/lv' + whichLevel;
        ResourceUtils.loadPrefab(path, (prefab) => {
            this.playingLevelNode = instantiate(prefab);
            //this.playingLevelNode.getComponent(LevelController).setUp(winCallback);
            this.gamePlay.addChild(this.playingLevelNode);
        });
    }
}


