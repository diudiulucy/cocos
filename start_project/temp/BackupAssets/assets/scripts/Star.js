cc.Class({
    extends: cc.Component,

    properties: {
        pickRadius: 0
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    getPlayerDistance:function(){
        var playerPos = this.game.player.getPoisition();
        var dist = cc.pDistance(this.node.position,playerPos);
    }
});
