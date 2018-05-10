import Sprite from '../../2DNode/Sprite';
class Plane extends Sprite{
    constructor(p){
      super();
      this.color = null;
      this.model = null;
      this.speed = 1.5;
      this.width = 60;
      this.height = 60;

      this.y = 600;
      this.x = 150;

      this.p = p;
      
      this.state = 0;
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