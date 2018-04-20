class BaseGL {
    constructor(cxt){
        this.cxt = cxt;
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
    clip(){

    }

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
    lineWidth(value){
        this.cxt.lineWidth = value;
    }
    lineCap(type){
        this.cxt.lineCap = type;
    }
    lineJoin(type){
        this.lineJoin = type;
    }
    miterLimit(value){
        this.miterLimit = value;
    }
    //未实现
    getLineDash(){
        this.cxt.getLineDash();
    }
    setLineDash(segments){
        this.cxt.setLineDash(segments);
    }
    //未实现
    lineDashOffset(value){
        this.cxt.lineDashOffset = value;
    }

    //渐变
    createLinearGradient(x1, y1, x2, y2){
        this.cxt.createLinearGradient(x1, y1, x2, y2);
    }
    createRadialGradient(x1, y1, r1, x2, y2, r2){
        this.cxt.createRadialGradient(x1, y1, r1, x2, y2, r2);
    }
    // gradient.addColorStop(position, color){
        
    // }
    //类似纹理创建
    createPattern(image, type){
        this.cxt.createPattern(image, type);
    }

    //阴影
    shadowOffsetX(float){
        this.cxt.shadowOffsetX = float;
    }
    shadowOffsetY(float){
        this.cxt.shadowOffsetY = float;
    }
    shadowBlur(float){
        this.cxt.shadowBlur = float;
    }
    shadowColor(color){
        this.cxt.shadowColor = color;
    }
}

export default BaseGL;