import GL from "./GL";
class Director {

    constructor(application){
        this.application = application;
        //初始化GL上下文
        this.gl = new GL(this.application.getContext(),this.application.bus);
        //所有场景
        this.sceneList=new Array();
        this.runScene=null;
        //定时器
        this.timers = [];
    }
    //加入一个场景
    addScene(scene){
        this.sceneList.push({scene:scene,sceneId:this.uuid()});
        if(this.runScene==null){
            this.runScene=this.sceneList[0].scene;
        }
    };

    uuid(){
        this.S4=() => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4());
    }

    //弹出一个场景覆盖当前场景
    popScene(){
        return this.sceneList.pop();
    };
    //切换场景
    switchScene(scene){
        this.runScene=scene;
        this.flushScene();
    };
    //添加并切换场景
    switchSceneAdd(scene){
        this.runScene=scene;
        this.addScene(scene);
        this.flushScene();
    };
    //根据id进行场景切换
    switchSceneId(sceneId){
        for(var i=0;i<this.sceneList.length;i++){
            if(this.sceneList[i].sceneId==sceneId){
                this.runScene=this.sceneList[i].scene;
                this.flushScene();
                break;
            }
        }
    };

    run(){
        var scene=this.runScene;
        //兼容
        if(!window.requestAnimationFrame){
            var lastTime = 0;
            window.requestAnimationFrame = function(callback){
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0,16.7-(currTime - lastTime));
                var id  = window.setTimeout(function(){
                    callback(currTime + timeToCall);
                },timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            }
        }
        if(!this.isRun && scene!=null){
            BFrame.scene = scene;
            BFrame.application  = this.application;
            BFrame.gl = this.gl;
            BFrame.timers = this.timers;
            BFrame();
            this.isRun = true;
        }
        
    };

    stop(){
        // clearInterval(this.flushId);

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }
        cancelAnimationFrame(BFrame.frameID)
        this.isRun = false;
    };

    flushScene(){
        this.stop();
        this.run();
    };
}

function BFrame(time) {
    // BFrame.application.fps = 1000/(time-BFrame.preTime);
    BFrame.preTime = time;
    if(BFrame.application.getState()){
        
        BFrame.scene.render(BFrame.gl);

        BFrame.application.setState(false);
        
    }

    // for (let timer in BFrame.timers) {
    //     //时间到达执行
    //     if(time - timer.pretime > timer.interval){
    //         timer.pretime = time;
    //         timer.func();
    //     }else{

    //     }
        
    // }

    BFrame.frameID = window.requestAnimationFrame(BFrame);
}

export default Director;