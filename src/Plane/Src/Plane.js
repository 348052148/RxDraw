import Sprite from '../../2DNode/Sprite';
import Vector from '../../Core/Vector';
class Plane extends Sprite{
    constructor(p){
      super();
      this.color = null;
      this.model = null;
      this.speed = 1.5;
      this.width = 40;
      this.height = 40;

      this.y = 600;
      this.x = 150;

      this.p = p;
      
      this.state = 0;
      this._position();
    }

    _position(){
        console.log(12);
        this.points = new Array();
        this.points.push(new Vector(this.x+this.width/2, this.y));
        this.points.push(new Vector(this.x+this.width/2-5, this.y+this.height/2-3));
        this.points.push(new Vector(this.x, this.y+this.height/2));
        this.points.push(new Vector(this.x, this.y+this.height));

        this.points.push(new Vector(this.x+this.width, this.y+this.height));
        this.points.push(new Vector(this.x+this.width, this.y+this.height/2));
        this.points.push(new Vector(this.x+this.width/2+5, this.y+this.height/2-3));

    }
  
    leftFly(){
        if(this.x != 0)
        this.x = this.x - this.speed;
    }
  
    rightFly(){
        if(this.x != 370)
        this.x = this.x + this.speed ;
    }
  
    forwardFly(){
        if(this.y != 0+this.height)
        this.y = this.y - this.speed;
    }

    backFly(){
        if(this.y != 660-this.height)
        this.y = this.y + this.speed;
    }
  
    onDraw(gl){
        if(this.state == 1){
            this.leftFly();
        }
        if(this.state == 2){
            this.rightFly();
        }
        if(this.state == 3){
            this.forwardFly();
        }
        if(this.state == 4){
            this.backFly();
        }
        if(this.i){
                
        }else{
            this.i = gl.image().createFromImageElement(this.p);
        }
        this.i.volum.width=this.width;
        this.i.volum.height=this.height;
        this.i.draw(this.x,this.y);    
    }

  }

  export default Plane;