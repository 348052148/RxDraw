import Container from "./Container";
import GL from "./GL";

class Node extends Container{

    constructor(){
        super();
        this.id = this.uuid();

        this._x = 0;
        this._y = 0;
    }

    get x(){
        return this._x;
    }

    set x(val){
        GL.setState(1);
        this._x = val;
    }

    get y(){
        return this._y;
    }

    set y(val){
        GL.setState(1);
        this._y = val;
    }

    uuid(){
        this.S4=() => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4());
    }

    //渲染
    render(){
        this.subject.next(1);
        this.nodeLst.forEach((v,i)=>{
            v.node.subject.next(1);
        });
    }

    onDraw(){
        
    }

    onComplete(){
        
    }

}

export default Node;