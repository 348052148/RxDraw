import Container from "./Container";

class Node extends Container{

    constructor(){
        super();
        this.id = this.uuid();

        this._x = null;
        this._y = null;

        this._ox = 0;
        this._oy = 0;
        this._ow = 0;
        this._oh = 0;

        this._w = null;
        this._h = null;

        this._gl = null;
    }

    get x(){
        return this._x;
    }

    set x(x){
        this._ox = (this._x==null)?x:this._x;
        this._x = x;
        this.emit();
    }

    get y(){
        return this._y;
    }

    set y(y){
        this._oy =  (this._y==null)?y:this._y;
        this._y = y;
        this.emit();
    }

    get width(){
        return this._w;
    }
    set width(w){
        this._ow = (this._w==null)?w:this._w;
        this._w = w;
        this.emit();
    }

    get height(){
        return this._h;
    }
    set height(h){
        this._oh = (this._h==null)?h:this._h;
        this._h = h;
        this.emit();
    }

    emit(){
        if(this._gl) this._gl.render(this.id);
    }

    uuid(){
        this.S4=() => {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (this.S4()+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+this.S4()+this.S4());
    }

    //渲染
    render(gl){
        if(gl.check(this.id)){
            gl.isRender = true;
        }

        if(gl.isRender){
            this._gl = gl;
            this.onBeforeDraw(gl);
            this.onDraw(gl);
            this.onAfterDraw(gl);
        }
        this.nodeLst.forEach((v,i)=>{
            v.node.render(gl);
        });
        
    }
    //绘制之前
    onBeforeDraw(){

    }
    //绘制之后
    onAfterDraw(){

    }
    //绘制
    onDraw(){
        
    }

    onComplete(){
        
    }

}

export default Node;