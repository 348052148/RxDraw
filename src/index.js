import App from './Core/Application'
import Sprite from './2DNode/Sprite'
import Container from './Core/Container';
import Scene from './2DNode/Scene';
import Director from './Core/Director';



let app = new App();

app.createWindow();

let context = app.getContext();

let s = new Sprite();

s.x =1;
s.y = 1;

s.onDraw=function(){
    context.save();
    context.fillRect(25+s.x,25+s.y,100,100);
    context.fillRect(25+s.x,25+s.y,100,100);
    context.clearRect(45+s.x,45+s.y,60,60);
    context.strokeRect(50+s.x,50+s.y,50,50);
    context.restore();
}

document.querySelector('#btn').addEventListener('click',()=>{
    s.x =100;
    s.y = 100;
   
});

let scene = new Scene();

scene.addChild(s);


let director = new Director(app);

director.addScene(scene);

director.run();

