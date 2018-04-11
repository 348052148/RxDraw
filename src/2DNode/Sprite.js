import Node from "../Core/Node";

class Sprite extends Node{


    constructor(){
        super();
        this.id=2;
    }

    onDraw(){
        console.log('sprite');
    }

    
}

export default Sprite;