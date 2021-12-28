class Polygon{
    constructor(sidesArr){
        this.sidesArr = sidesArr
    }
    get countSides(){
        return this.sidesArr.length
    }
    get perimeter() {
        const reducer = (acc, curr) => acc + curr
        return this.sidesArr.reduce(reducer)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const splitArr = this.sidesArr

        const a =splitArr[0]
        const b =splitArr[1]
        const c =splitArr[2]

        if(a+b > c && a+c > b && b+c > a){
            return true
        }else{
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        const sidesArr = this.sidesArr
        for(let i = 1; i<sidesArr.length; i++){
            if(sidesArr[i] !== sidesArr[0]){
                return false
            }else{
                return true
            }
        }
        
    }
    get area() {    

        return Math.pow(this.sidesArr[1], 2)
    }
}