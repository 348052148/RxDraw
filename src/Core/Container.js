import Rx from 'rxjs/Rx';
class Container {

    constructor(){
        this.subject = new Rx.Subject();
        this.nodeLst = [];
    }

    addChild(node) {
        this.nodeLst.push({id:node.id,node:node,subscription:this.subject.subscribe({next:node.onDraw,complete:node.onComplete})});
    }

    removeChild(node){
        let index = null;
        this.nodeLst.forEach((v,i)=>{
            if(v.id == node.id){
                index = i;
                //取消订阅
                v.subscription.unsubscribe();
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