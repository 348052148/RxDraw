import Node from "../Core/Node";

class Scene extends Node{
    constructor(){
        super();
    }
    onBeforeDraw(gl){
        gl.clearRect(this.x,this.y,this.width,this.height);
    }
    onDraw(gl){
        
    }

    onComplete(){
        
    }
}

export default Scene;