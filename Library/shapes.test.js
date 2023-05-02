// Import all classes from shape.js
const{Shape, Circle, Triangle, Square}=require("./shapes")
test('use set color method to change color', () => {
  const shape=new Shape("red")
  shape.setColor("blue")
  expect(shape.color).toBe("blue");
});

// Use Jest to write tests for your classes

const triangle = require("./shapes").Triangle;
// tests the draw method to see if it will create a blue triangle
test("test triangle render", () => {
    const shape = new Triangle();
shape.setcolor("blue");
expect(shape.draw()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue"/>`)
});

const Square = require("./shapes").Square;
// tests the draw method to see if it will create a blue square
test('test square render', () => {
    const shape = new Square();
shape.setcolor("blue");
expect(shape.draw()).toEqual(`<rect x="50" height="200" width="200" fill="blue"/>`)
});

const Circle = require("./shapes").Circle;
// tests the draw method to see if it will create a blue circle
test("test circle render", () => {
    const shape = new Circle();
shape.setcolor("blue");
expect(shape.draw()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue"/>`)
});