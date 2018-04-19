class Container {

    constructor(){
        this.nodeLst = [];
        //容器的层次
        this.index = 0;
    }

    addChild(node) {
        //层次依次递增
        this.nodeLst[this.index] = {id:node.id,node:node};
        this.index = this.index+1;
    }

    removeChild(node){
        let index = null;
        this.nodeLst.forEach((v,i)=>{
            if(v.id == node.id){
                index = i;
                //取消订阅
            }
        });
        //从数组中移除
        if(index !==null)
            this.nodeLst.splice(index,1);
    }

    removeAllChild(){

    }



}

export default Container;