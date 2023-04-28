// Import all classes from shape.js
const{Shape, Circle, Triangle, Square}=require("./shapes")
// Use Jest to write tests for your classes 

test('use set color method to change color', () => {
    const shape=new Shape("red")
    shape.setColor("blue")
    expect(shape.color).toBe("blue");
  });