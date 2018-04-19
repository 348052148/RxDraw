/**
 * GL绘图原件
 * 1.实现普通的图形绘制
 * 2.画笔样式描绘
 * 3.还原
 */
class GL {
    constructor(cxt,bus){
        this.cxt = cxt;
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



    //图形api
    //情况一个矩形
    clearRect(x,y,width,height){
        this.cxt.clearRect(x, y, width, height)
    }

    fillRect(x, y, width, height){
        this.cxt.fillRect(x,y,width,height);
    }

    strokeRect(x, y, width, height){
        this.cxt.strokeRect(x,y,width,height);
    }
    //-----------------路径绘制---------------------------
    beginPath(){
        this.cxt.beginPath();
    }

    closePath(){
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
    /**
     *  new Path2D();     // 空的Path对象
        new Path2D(path); // 克隆Path对象
        new Path2D(d);    // 从SVG建立Path对象
     */
    Path2D(){
        return new Path2D();
    }
    /*******路径绘制结束****** */

    //style
    fillStyle(color){
        this.cxt.fillStyle = color;
    }
    strokeStyle(color){
        this.cxt.strokeStyle = color;
    }
    globalAlpha(alpha){
        this.globalAlpha = alpha;
    }
}

export default GL;