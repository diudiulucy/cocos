const { ccclass, property } = cc._decorator;
import  AudioMng  from "./AudioMng";

@ccclass
export default class Menu extends cc.Component {
    @property(AudioMng)
    audioMng:AudioMng = null;

    onLoad () {
        this.audioMng = this.audioMng.getComponent('AudioMng');
        this.audioMng.playMusic();
    }

    start () {

    }
}
