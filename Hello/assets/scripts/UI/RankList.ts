const { ccclass, property } = cc._decorator;

@ccclass
export default class RankList extends cc.Component {

    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;

    @property(cc.Prefab)
    prefabRankItem: cc.Prefab = null;

    @property(cc.Integer)
    rankCount: number = 0;

    onLoad() {
        // this.content = this.scrollView.content;
        this.populateList();
    }

    populateList() {
        const players = [
            {
                name: '燃烧吧，蛋蛋儿军',
                gold: 3000,
                photoIdx: 0
            },
            {
                name: '地方政府',
                gold: 2000,
                photoIdx: 1
            },
            {
                name: '手机超人',
                gold: 1500,
                photoIdx: 2
            },
            {
                name: '天灵灵，地灵灵',
                gold: 500,
                photoIdx: 3
            },
            {
                name: '哟哟，切克闹',
                gold: 9000,
                photoIdx: 4
            },
            {
                name: '学姐不要死',
                gold: 5000,
                photoIdx: 5
            },
            {
                name: '提百万',
                gold: 10000,
                photoIdx: 6
            }
        ];
        
        for (let i = 0; i < this.rankCount; i++) {
            var playerInfo = players[i];
            var item = cc.instantiate(this.prefabRankItem);
            item.getComponent('RankItem').init(i,playerInfo);
            this.scrollView.content.addChild(item);
        }
    }




}
