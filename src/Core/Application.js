class Application  {

    constructor(){
    
    }

    createWindow(){
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