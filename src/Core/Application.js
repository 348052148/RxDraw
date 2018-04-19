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
    }

    create(config){
        let ele = document.body;

        this.canvas= document.createElement("canvas");
        this.canvas.style.left=100+'px';
        this.canvas.style.top=100+'px';
        this.canvas.width=600;
        this.canvas.height=400;
        this.canvas.style.position = 'absolute';
        this.canvas.style.border="1px solid #000"; 
        this.canvas.id='abs';

        ele.appendChild(this.canvas);

        this.cxt =document.getElementById('abs').getContext("2d");
        
        //应用初始化
        if(config.init) config.init(this);
        this.director = new Director(this);
        //应用渲染
        if(config.render) config.render(this.director);
        //
        this.director.run();
        //应用销毁
        if(config.distory) config.distory(this);
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