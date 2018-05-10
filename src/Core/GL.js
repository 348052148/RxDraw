import BaseGL from './BaseGL';
/**
 * GL绘图原件
 * 1.实现普通的图形绘制
 * 2.画笔样式描绘
 * 3.还原
 */
class GL extends BaseGL{
    constructor(cxt,bus){
        super(cxt);
        this.bus = bus;

        this.currentNodeList = [];
        this.isRender = true;
        //是否开启性能模式 开启性能模式可以减少图形渲染。但是不得不增加计算边界量({1，只有上层node的才渲染，2、只有影响到的node才渲染})
        this.isMode = false;
    }

    render(id){
        this.bus.next(id);
        //渲染
        if(this.isMode){
            if(this.currentNodeList.indexOf(id) == -1){ 
                this.currentNodeList.push(id);
                console.log('xuan'+id);
                this.isRender = false;
            }
        }
        
        //console.log('执行渲染');
    }

    check(id){
        if(this.currentNodeList.length == 0) return false;

        let i = this.currentNodeList.indexOf(id);
        if(i!=-1){
            this.currentNodeList.splice(i,1);
            return true;
        }
        return false;
    }


    /**
     *  new Path2D();     // 空的Path对象
        new Path2D(path); // 克隆Path对象
        new Path2D(d);    // 从SVG建立Path对象
     */
    Path2D(){
        return new Path2D();
    }
    /*******路径绘制结束****** */

    //文字处理
    text(){
        return new Text(this.cxt);
    }
    //图片处理对象
    image(){
        ImageBlock.cxt = this.cxt;
        return ImageBlock;
    }
    //路径处理
    path(){
        return new Path(this.cxt);
    }

    createImageBitmap(){
        
    }



    //变化
    save(){
        this.cxt.save();
    }

    restore(){
        this.cxt.restore();
    }

    //变换
    translate(x, y){
        this.translate(x,y);
    }

    rotate(angle){
        this.rotate(angle);
    }

    scale(x, y){
        this.scale(x,y);
    }

    transform(m11, m12, m21, m22, dx, dy){
        this.transform(m11, m12, m21, m22, dx, dy);
    }

    setTransform(m11, m12, m21, m22, dx, dy){}
    
    resetTransform(){}

    //globalCompositeOperation = type 画新图形的时候的遮罩策略
    
    //像素操作
    createImageData(){

    }

    getImageData(left, top, width, height){

    }

    putImageData(myImageData, dx, dy){

    }
    //canvas.toDataURL('image/png')
    //canvas.toDataURL('image/jpeg', quality)
    //canvas.toBlob(callback, type, encoderOptions)
}

class Path{
    constructor(cxt){
        this.cxt = cxt;
        this.cxt.restore();
        this.cxt.save();
        this.cxt.beginPath();
    }

    style(style){
        if(style.color){
            this.cxt.fillStyle = style.color;
            this.cxt.strokeStyle = style.color;
        }

        if(style.alpha){
            this.globalAlpha = alpha;
        }

        if(style.lineWidth){
            this.cxt.lineWidth = style.lineWidth;
        }

        if(style.lineCap){
            this.cxt.lineCap = style.lineCap;
        }

        if(style.lineJoin){
            this.cxt.lineJoin = style.lineJoin;
        }

        if(style.miterLimit){
            this.cxt.miterLimit = style.miterLimit;
        }
        return this;   
    }
    //销毁
    destory(){
        this.cxt.closePath();
    }

    stroke(){
        this.cxt.stroke();
    }

    fill(){
        this.cxt.fill();
    }

    moveTo(x, y){
        this.cxt.moveTo(x, y);
    }

    lineTo(x,y){
        this.cxt.lineTo(x,y);
    }

    arc(x, y, radius, startAngle, endAngle, anticlockwise){
        this.cxt.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    }

    arcTo(x1, y1, x2, y2, radius){
        this.cxt.arcTo(x1, y1, x2, y2, radius);
    }

    quadraticCurveTo(cp1x, cp1y, x, y){
        this.cxt.quadraticCurveTo(cp1x, cp1y, x, y);
    }

    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y){
        this.cxt.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    }

    rect(x, y, width, height){
        this.cxt.rect(x, y, width, height);
    }
}

class ImageBlock{
    constructor(cxt,imgSource){
        this.imgSource =imgSource;
        this.cxt = cxt;
        this.volum = {
            width:imgSource.width,
            height:imgSource.height
        }
        this.cxt.restore();
        this.cxt.save();
    }

    cut(sx,sy,sw,sh){
        this.cutInfo = {
            sx:sx,
            sy:sy,
            sw:sw,
            sh:sh
        };
    }

    draw(x,y){

        if(this.cutInfo){
            return this.cxt.drawImage(this.imgSource, this.cutInfo.sx, this.cutInfo.sy, this.cutInfo.sw, this.cutInfo.sh, 
                x, y, this.cutInfo.sw, this.cutInfo.sh)
        }

        if(this.volum){
            return this.cxt.drawImage(this.imgSource, x, y,this.volum.width,this.volum.height);
        }

        return this.cxt.drawImage(this.imgSource, x, y);
    }


    static createFromImageElement(image){
        return new ImageBlock(ImageBlock.cxt,image)
    }
    static createFromVideoElement(video){
        return new ImageBlock(ImageBlock.cxt,video)
    }
    static createFromCanvasElement(canvans){
        return new ImageBlock(ImageBlock.cxt,canvans)
    }
    static createFromImageBitmap(bitmap){
        return new ImageBlock(ImageBlock.cxt,bitmap)
    }

    static createFromUrl(url,func){

        let image = new Image();
        image.src = url;

        image.onload = ()=>{
            func(new ImageBlock(ImageBlock.cxt,image));
        }
       
    }
}
ImageBlock.cxt = null;

class Text{
    constructor(cxt){
        this.cxt = cxt;
        this.cxt.restore();
        this.cxt.save();
    }
    style(style){
        if(style.font){
            this.cxt.font = style.font;
        }
        if(style.textAlign){
            this.cxt.textAlign = style.textAlign;
        }
        if(style.textBaseline){
            this.cxt.textBaseline = style.textBaseline;
        }
        if(style.direction){
            this.cxt.direction= style.direction;
        }
        return this;
    }
    maxWidth(maxWidth){
        this.maxWidth =maxWidth;
        return this;
    }
    fill(text,x, y){
        if(this.maxWidth){
            this.cxt.fillText(text, x, y,this.maxWidth);
        }
        return this.cxt.fillText(text, x, y);
    }
    stroke(text,x, y){
        if(this.maxWidth){
            this.cxt.strokeText(text, x, y,this.maxWidth);
        }
        this.cxt.strokeText(text, x, y);
    }
    measureText(){
        return this.cxt.measureText();
    }
       
}

export default GL;