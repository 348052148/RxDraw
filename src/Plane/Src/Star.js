import Sprite from '../../2DNode/Sprite';
import Vector from '../../Core/Vector';
class Star extends Sprite{

    constructor() {
        super();
        this.x = Math.ceil(Math.random() *370);
        this.y = 400;//- Math.ceil(Math.random() *20)+10;

        this.width = Math.ceil(Math.random() *5)+4;
        this.height = this.width;
    }

    onDraw(gl){
        let path = gl.path();
        path.style({color:'yellow'}).arc(this.x+this.width/2,this.y+this.width/2,this.width,0,Math.PI*2,true);
        path.fill();

        gl.path().style({color:'red'}).rect(this.x,this.y,this.width,this.height).stroke();
    }
}

export default Star;