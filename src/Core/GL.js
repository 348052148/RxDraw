/**
 * GL绘图原件
 * 1.实现普通的图形绘制
 * 2.画笔样式描绘
 * 3.还原
 */
class GL {

    static getState(){
        return this.state;
    }

    static setState(state){
        this.state = state;
    }


}
GL.state = 1;
GL.context = null;
export default GL;