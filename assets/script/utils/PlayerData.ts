import { _decorator, Component, Node, director } from 'cc';
import { PlayerSave } from './PlayerSave';
import { Configs } from './Configs';
const { ccclass, property } = _decorator;

@ccclass('PlayerData')
export class PlayerData extends Component {
    public static instance: PlayerData;

    public currentReachLevel: number = 1;
    public maxLevel: number = 100;
    start() {
        if (PlayerData.instance == null) {
            PlayerData.instance = this;
            director.addPersistRootNode(this.node);
        }
        //
        //get save level data
        if (PlayerSave.getDataStorage(Configs.KEY_STORAGE_CURRENT_LEVEL)) {
            this.currentReachLevel = Number(PlayerSave.getDataStorage(Configs.KEY_STORAGE_CURRENT_LEVEL));
            console.log(this.currentReachLevel);

        }

        if (PlayerSave.getDataStorage(Configs.KEY_STORAGE_MAX_LEVEL)) {
            this.maxLevel = Number(PlayerSave.getDataStorage(Configs.KEY_STORAGE_MAX_LEVEL));
        }

    }
    update(deltaTime: number) {

    }
}


