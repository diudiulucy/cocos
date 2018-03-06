const { ccclass, property } = cc._decorator;
import AudioMng from "../AudioMng";

@ccclass
export default class ButtonScaler extends cc.Component {
    @property(cc.Float)
    pressdScale: number = 1;

    @property(cc.Float)
    transDuration: number = 0;

    @property(cc.Float)
    initScale:number = 0;

    @property(cc.Button)
    button:cc.Button = null;

    @property(cc.ActionInterval)
    private scaleDownAction:cc.ActionInterval = null;

    @property(cc.ActionInterval)
    private scaleUpAction:cc.ActionInterval = null;

    @property(AudioMng)
    audioMng:AudioMng = null;


    onLoad() {
        var self = this;
       


        self.initScale = this.node.scale;
        self.button = self.getComponent(cc.Button);
        self.scaleDownAction = cc.scaleTo(self.transDuration, self.pressdScale);
        self.scaleUpAction = cc.scaleTo(self.transDuration, self.initScale);

        function onTouchDown(event) {
            this.stopAllActions();
            var audioMngNode = cc.find('Menu/AudioMng') || cc.find('Game/AudioMng');
            if (audioMngNode) {
                this.audioMng = audioMngNode.getComponent('AudioMng');
            }
            if (this.audioMng) this.audioMng.playButton();
            this.runAction(self.scaleDownAction);
        }

        function onTouchUp(event) {
            this.stopAllActions();
            this.runAction(self.scaleUpAction);
        }

        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
        this.node.on('touchcancel', onTouchUp, this.node);

    }

    
}




