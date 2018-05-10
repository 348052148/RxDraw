import Director from './Director';
import Rx from 'rxjs';
class Application  {

    constructor(){
        //使用rxjs处理 避免重复渲染操作能一次渲染，绝不多次渲染
        this.bus = new Rx.Subject();
        this.state = true;
        this.bus.subscribe({
            next: (id) =>{
               // console.log('接受渲染');
                this.setState(id);
            }
        });

        this.IMG = {};
    }

    create(config){
        let ele = document.body;

        this.canvas= document.createElement("canvas");
        // this.canvas.style.left=100+'px';
        // this.canvas.style.top=100+'px';
        this.canvas.width=(config.width)?config.width:370;
        this.canvas.height=(config.height)?config.height:660;
        this.canvas.style.position = 'absolute';
        this.canvas.style.border="1px solid #000"; 
        this.canvas.id='abs';

        ele.appendChild(this.canvas);

        this.cxt =document.getElementById('abs').getContext("2d");
        
        //应用初始化
        if(config.init) config.init(this);
        this.director = new Director(this);
        //资源加载
        if(!config.resource) config.resource ={};

        this.load(config.resource,(resource)=>{
            //应用渲染
            if(config.render) config.render(this.director,resource);
            //导演指挥
            this.director.run();
        });
    
        //应用销毁
        if(config.distory) config.distory(this);
    }

    load(resource,callback){
        let loadedImages = 0;
        let numImages = 0;
        // get num of sources
        for (let src in resource) {
            numImages++;
        }

        for (let src in resource) {

            this.IMG[src] = new Image();

            //图片执行完成
            this.IMG[src].onload = ()=>{
                loadedImages ++;
                //重绘一个进度条
                //func(loadedImages,numImages);

                //当所有图片加载完成时，执行回调函数callback
                if (loadedImages >= numImages) {
                    callback(this.IMG);
                }
            };
            this.IMG[src].src = resource[src];
            // 使用此选项进行跨域操作
            // this.IMG[src].crossOrigin = "Anonymous";
        }
    }

    getContext(){
        return this.cxt;
    }

    setState(state){
        this.state = state;
    }

    getState(){
        return this.state;
    }
}

export default Application;