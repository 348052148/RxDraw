import Container from "./Container";
import Vector from './Vector';
import Collision from "./Collision";
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

        this.collision = [];

        this._position();
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
        this._position();
        if(this._gl) this._gl.render(this.id);
    }
    //计算点
    _position(){
        this.points = new Array();
        this.points.push(new Vector(this.x, this.y));
        this.points.push(new Vector(this.x, this.y+this.height));
        this.points.push(new Vector(this.x+this.width, this.y+this.height));
        this.points.push(new Vector(this.x+this.width, this.y));
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
            this.checkCollision(gl);
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
    //碰撞检测draw后
    onCollision(){
        
    }

    onComplete(){
        
    }

    //碰撞检测
    checkCollision(gl){
        //绘制碰撞模型
        let path = gl.path();
        let firstPos = {};
        this.points.forEach((p,i)=>{
            if(i ==0){
                path.moveTo(p.x,p.y);
                firstPos = p;
            }
           else{
                path.lineTo(p.x,p.y);
           }
        });
        path.lineTo(firstPos.x,firstPos.y);
        path.stroke();

        this.collision.forEach((v)=>{
            if(this.isCollision(v.node)){
                //全局监听项
                this.onCollision(v.node);
                //具体监听项
                v.callback(v.node);
                if(v.type == 'once') this.removeCollisoionListener(v.node);
            }
        });
    }

    //添加需要观察的碰撞对象
    addCollisionListener(node,callback){
        this.collision.push({node:node,callback:callback,type:'long'});
    }

    addOnceCollisionListener(node,callback){
        this.collision.push({node:node,callback:callback,type:'once'});
    }

    removeCollisoionListener(node){
        this.collision.forEach((v,i)=>{
            if(v.node.id == node.id){
                this.collision.splice(i,1);
                return true;
            }
        })
    }


    //判断是否碰撞
    isCollision(node){
        let collision = new Collision();
        return collision.PolyVsPoly(this,node);
    }

}

export default Node;