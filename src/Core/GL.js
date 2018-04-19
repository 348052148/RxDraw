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

}

export default GL;