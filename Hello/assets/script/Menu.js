cc.Class({
    extends: cc.Component,

    properties: {
        audioMng:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.audioMng.playMusic();
    },

    start () {

    },

    // update (dt) {},
});
