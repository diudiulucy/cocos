const { ccclass, property } = cc._decorator;

@ccclass
export default class AudioMng extends cc.Component {

    @property(cc.AudioClip)
    bgm: cc.AudioClip = null;

    @property(cc.AudioClip)
    winAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    loseAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    cardAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    chipsAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    buttonAudio: cc.AudioClip = null;

    
    @property(cc.Integer)
    bgmId:number = -1;


    playMusic () {
        this.bgmId = cc.audioEngine.play(this.bgm as any, false, 1);
    }

    pauseMusic() {
        cc.audioEngine.pause(this.bgmId);
    }

    resumeMusic() {
        cc.audioEngine.resume(this.bgmId);
    }

    _playSFX(clip) {
        cc.audioEngine.play(clip, false,1);
    }

    playWin () {
        this._playSFX(this.winAudio);
    }
    playLose () {
        this._playSFX(this.loseAudio);
    }

    playCard () {
        this._playSFX(this.cardAudio);
    }

    playChips () {
        this._playSFX(this.chipsAudio);
    }

    playButton () {
        this._playSFX(this.buttonAudio);
    }
}

