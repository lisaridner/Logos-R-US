// add classes and sub classes 
// Your parent class will be your shape class
// Your circle, triangle, and square will be your sub classes of shapes 
// Export all classes

class Shape {
    constructor (color){
    this.color = color 
    }
setColor(newColor){
    this.color=newColor
}
}
class Circle extends Shape {
    constructor(color){
        super(color)
    }
render(){
    return `<circle cx="25" cy="75" r="20" stroke="${this.color}" fill="${this.color}" stroke-width="5"/>`
}
}

class Square extends Shape {
    constructor (color){
        super(color)
    }
render(){
return `<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>`
}
}

class Triangle extends Shape {
    constructor(color){
        super(color)
    }
render(){
return `<polygon points="200,10 250,210 160,210" 
//   stroke="green" fill="transparent" stroke-width="5"/>1`
}
}

module.exports={Shape,Circle, Triangle, Square}
