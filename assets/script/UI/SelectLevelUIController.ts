import { _decorator, Component, instantiate, Node, Prefab, ScrollView, UITransform } from 'cc';
import { PlayerData } from '../utils/PlayerData';
import { SelectLevelItem } from '../items/SelectLevelItem';
const { ccclass, property } = _decorator;

@ccclass('SelectLevelUIController')
export class SelectLevelUIController extends Component {
    @property(Prefab)
    selectLevelItemprefab: Prefab;

    @property(ScrollView)
    scrollView: ScrollView;

    onClickLevelItem: CallableFunction;

    start() {
        // let currentlevel: number = PlayerData.instance.currentReachLevel;
        // let maxlevel: number = PlayerData.instance.maxLevel;

        // for (let i = 0; i < currentlevel - 1; i++) {
        //     let newLevelItem: Node = instantiate(this.selectLevelItemprefab);

        //     newLevelItem.getComponent(SelectLevelItem).setUp(1, i + 1, this.onClickLevelItem);
        //     this.scrollView.content.addChild(newLevelItem);
        // }

        // let newLevelItem: Node = instantiate(this.selectLevelItemprefab);
        // newLevelItem.getComponent(SelectLevelItem).setUp(0, currentlevel, this.onClickLevelItem);
        // this.scrollView.content.addChild(newLevelItem);

        // for (let i = currentlevel; i < maxlevel; i++) {
        //     let newLevelItem: Node = instantiate(this.selectLevelItemprefab);

        //     newLevelItem.getComponent(SelectLevelItem).setUp(2, i + 1, this.onClickLevelItem);
        //     this.scrollView.content.addChild(newLevelItem);
        // }

        // let scrollHeight: number = (maxlevel / 5) * (newLevelItem.getComponent(UITransform).contentSize.height + 40);

        // this.scrollView.content.getComponent(UITransform).setContentSize(720, scrollHeight);
    }

    setUpLevelItem(onClickLevelItem: CallableFunction) {
        this.onClickLevelItem = onClickLevelItem;
    }

    createLevelItemList() {
        let currentlevel: number = PlayerData.instance.currentReachLevel;
        let maxlevel: number = PlayerData.instance.maxLevel;

        for (let i = 0; i < currentlevel - 1; i++) {
            let newLevelItem: Node = instantiate(this.selectLevelItemprefab);

            newLevelItem.getComponent(SelectLevelItem).setUp(1, i + 1, this.onClickLevelItem);
            this.scrollView.content.addChild(newLevelItem);
        }

        let newLevelItem: Node = instantiate(this.selectLevelItemprefab);
        newLevelItem.getComponent(SelectLevelItem).setUp(0, currentlevel, this.onClickLevelItem);
        this.scrollView.content.addChild(newLevelItem);

        for (let i = currentlevel; i < maxlevel; i++) {
            let newLevelItem: Node = instantiate(this.selectLevelItemprefab);

            newLevelItem.getComponent(SelectLevelItem).setUp(2, i + 1, this.onClickLevelItem);
            this.scrollView.content.addChild(newLevelItem);
        }

        let scrollHeight: number = (maxlevel / 5) * (newLevelItem.getComponent(UITransform).contentSize.height + 40);

        this.scrollView.content.getComponent(UITransform).setContentSize(720, scrollHeight);
    }

    update(deltaTime: number) {

    }
}


