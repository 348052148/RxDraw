import Layer from '../../2DNode/Layer'
import Star from './Star'
class StarDispatch extends Layer{
    constructor(){
        super();
        this.StarLst = [];

        this.score = 0;

        this.length =  100;

       
            let star = new Star();
            this.add(star);
        // setInterval(()=>{
        //     let star = new Star();
        //     if(this.StarLst.length < this.length){
        //         this.add(star);
        //     }
        // },200);
    }

    add(star){
        this.StarLst.push(star);
        this.addChild(star);
    }

    remove(star){
        this.removeChild(star);
    }

    run(plane){
        // setInterval(()=>{
        //     console.log(this.StarLst.length);
        //     for (let i=0;i<this.StarLst.length;i++) {
                
        //         if(plane.isCollision(this.StarLst[i])){
        //             console.log('碰撞了');
        //         }else{
        //             console.log(plane.points);
        //         }

        //         if(this.StarLst[i].y > 600){
        //             this.removeChild(this.StarLst[i]);
        //             this.StarLst.splice(i,1);
        //         }else{
        //             this.StarLst[i].y = this.StarLst[i].y + 1;
        //         }
                
        //         console.log(this.StarLst[i].points);
        //     }
        // },1000/30);
    }
    

}

export default StarDispatch;