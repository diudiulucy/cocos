const { ccclass, property } = cc._decorator;

@ccclass
export default class RankItem extends cc.Component {

    @property(cc.Sprite)
    spRankBG: cc.Sprite = null;

    @property(cc.Label)
    labelRank: cc.Label = null;

    @property(cc.Label)
    labelPlayerName: cc.Label = null;

    @property(cc.Label)
    labelGold: cc.Label = null;

    @property(cc.Sprite)
    spPlayerPhoto: cc.Sprite = null;

    @property([cc.SpriteFrame])
    texRankBg: Array<cc.SpriteFrame> = [];

    @property([cc.SpriteFrame])
    texPlayerPhoto: Array<cc.SpriteFrame> = [];

    init(rank, playerInfo) {
        if (rank < 3) {
            this.labelRank.node.active = false;
            this.spRankBG.spriteFrame = this.texRankBg[rank];
        } else {
            this.labelRank.node.active = true;
            this.labelRank.string = (rank + 1).toString();
        }

        this.labelPlayerName.string = playerInfo.name;
        this.labelGold.string = playerInfo.gold.toString();
        this.spPlayerPhoto.spriteFrame = this.texPlayerPhoto[playerInfo.photoIdx];
    }

    update(dt) {

    }
}
