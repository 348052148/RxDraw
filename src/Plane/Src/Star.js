import Sprite from '../../2DNode/Sprite';

class Star extends Sprite{

    constructor() {
        super();
        this.x = Math.ceil(Math.random() *370);
        this.y = - Math.ceil(Math.random() *20)+10;

        this.size = Math.ceil(Math.random() *5)+4;
    }

    onDraw(gl){
        let path = gl.path();
        path.arc(this.x,this.y,this.size,0,Math.PI*2,true);
        path.fill();
    }
}

export default Star;