import App from './Core/Application'
import Sprite from './2DNode/Sprite'
import Container from './Core/Container';
import Scene from './2DNode/Scene';
import Director from './Core/Director';


import Plane from './Plane/Src/Plane';
import Star from './Plane/Src/Star';
import StarDispatch from './Plane/Src/StarDispatch';

import p from './Plane/Resource/Plane.png';

let app = new App();

app.create({
  flush:true,
  resource:{
    plane:p
  },
  init:()=>{

  },
  render:(director,resource)=>{
    
    let scene = new Scene();
    scene.width = 370;
    scene.height = 660;

    console.log(resource);

    let plane = new Plane(resource.plane);

    scene.addChild(plane);

    director.addScene(scene);

    // let sdispatch = new StarDispatch();

    // sdispatch.run(plane);

    // scene.addChild(sdispatch);

    let star = new Star();
    scene.addChild(star);

    plane.addOnceCollisionListener(star,(v)=>{
        console.log(v);
    });

 
    //状态机
    document.onkeydown = (event) => {
      if(event.keyCode == 39){//right
          plane.state = 2;
      }
      if(event.keyCode == 37){//left
          plane.state = 1;
      }
      if(event.keyCode == 38){//top
        plane.state = 3;
      }
      if(event.keyCode == 40){//下
        plane.state = 4;
      }
    };
    document.onkeyup = (event) => {
      plane.state=0;
    }

  }
});