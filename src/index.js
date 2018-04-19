import App from './Core/Application'
import Sprite from './2DNode/Sprite'
import Container from './Core/Container';
import Scene from './2DNode/Scene';
import Director from './Core/Director';



let app = new App();

app.create({
  init:()=>{

  },
  render:(director)=>{
    
    let s = new Sprite();

    s.x =0;
    s.y = 0;
    s.width=100;
    s.height=100;


    s.onDraw=function(gl){
        let context = gl.cxt;
        context.fillRect(this.x,this.y,this.width,this.height);
        context.fillRect(this.x,this.y,this.width,this.height);
        context.clearRect(20+this.x,20+this.y,this.width-40,this.height-40);
        context.strokeRect(25+this.x,25+this.y,this.width-50,this.height-50);
    }

    document.querySelector('#btn').addEventListener('click',()=>{
        // setInterval(()=>{
        //   s.x +=10;
        //   s.y += 10;
        //   s.width +=10;
        // },500);
        s.x +=100;
        s.y += 100;
        s.width +=10;
    });


    let s1 = new Sprite();
    s1.x=200;s1.y=200;s1.width=30;s1.height=30;

    s1.onDraw=function(gl){
      let context = gl.cxt;
      context.save();
      context.fillRect(this.x,this.y,this.width,this.height);
    }

    let scene = new Scene();
    scene.width = 600;
    scene.height = 400;

    scene.addChild(s1);

    scene.addChild(s);


    director.addScene(scene);

    director.run();
  }
});