import Vector from './Vector';
class Collision {

     PolyVsPoly(p1, p2) {
        //check the normal in p1
        for(var i = 0; i < p1.points.length-1; i++) {
            var edge = this.Minus(p1.points[i], p1.points[i+1]);
            var normal = this.Normal(edge);
    
            var isOverlap = this.CheckCollide(normal, p1, p2);
            if(!isOverlap)
                return false;
        }
    
        //check normal in p2
        for(var i = 0; i < p2.points.length-1; i++) {
            var edge = this.Minus(p2.points[i], p2.points[i+1]);
            var normal = this.Normal(edge);
    
            var isOverlap = this.CheckCollide(normal, p1, p2);
            if(!isOverlap)
                return false;
        }
    
        return true;
    }
    
    
    CheckCollide(axis, p1, p2) {
        var min1 = this.Dot(p1.points[0], axis);
        var max1 = this.Dot(p1.points[0], axis);
        for(var k = 1; k < p1.points.length; k++) {
            var v = this.Dot(p1.points[k], axis);
            if(v > max1)
                max1 = v;
            if(v < min1)
                min1 = v;
        }
            
        var min2 = this.Dot(p2.points[0], axis);
        var max2 = this.Dot(p2.points[0], axis);
        for(var k = 1; k < p2.points.length; k++) {
            var v = this.Dot(p2.points[k], axis);
            if(v > max2)
                max2 = v;
            if(v < min2)
                min2 = v;
        }
    
        if(!this.IsOverlap(min1, max1, min2, max2))
            return false;
    
        return true;
    }
    
    IsOverlap(min1, max1, min2, max2) {
        if(min1 > max2) 
            return false;
        if(max1 < min2)
            return false;
    
        return true;
    }
    
    Minus(v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    }
    
    Normal(v) {
        return new Vector(-v.y, v.x);
    }
    
    Dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }
    
    
}

export default Collision;