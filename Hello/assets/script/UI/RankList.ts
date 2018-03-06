const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.ScrollView)
    scrollView:cc.ScrollView;

    @property(cc.Prefab)
    prefabRankItem:cc.Prefab;

    @property
    rankCount:number = 0;

    onLoad(){
        this.content = this.scrollView.content;
    }
   
}
