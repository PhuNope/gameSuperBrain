import { _decorator, Component, director, Label, Node, Sprite, SpriteFrame } from 'cc';
import { PlayerData } from '../utils/PlayerData';
import { Configs } from '../utils/Configs';
const { ccclass, property } = _decorator;

@ccclass('SelectLevelItem')
export class SelectLevelItem extends Component {
    @property(Label)
    labelLevel: Label;

    @property(SpriteFrame)
    statusSpriteFrameList: SpriteFrame[] = [];

    @property(Sprite)
    statusSprite: Sprite;

    private status: number;
    private level: number;

    private onClickLevelItem: CallableFunction;

    start() {
    }

    public setUp(status: number, level: number, onClickLevelItem: CallableFunction) {
        this.status = status;
        this.level = level;

        this.onClickLevelItem = onClickLevelItem;

        this.labelLevel.string = level.toString();
        if (status == 0) {
            this.statusSprite.spriteFrame = null;
        } else if (status == 1) {
            this.statusSprite.spriteFrame = this.statusSpriteFrameList[1];
        } else {
            this.statusSprite.spriteFrame = this.statusSpriteFrameList[2];
        }
    }

    onClickSelected() {
        if (this.status == 0 || this.status == 1) {
            this.onClickLevelItem(this.level);
        }
    }

    update(deltaTime: number) {

    }
}


