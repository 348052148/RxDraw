import Node from "../Core/Node";

class Sprite extends Node{


    constructor(){
        super();
    }
    onBeforeDraw(gl){
        if(gl.isMode){
            console.log(this._ox);
            console.log(this._oy);
            console.log(this._ow);
            console.log(this._oh);
            gl.clearRect(this._ox,this._oy,this._ow,this._oh);
        }
    }

    onDraw(){
        console.log('sprite');
    }

    
}

export default Sprite;