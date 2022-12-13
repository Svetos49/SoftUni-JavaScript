class Circle {
    constructor(radius) {
         this.radius = radius;
    }
    get diameter() {
        return this.radius * 2;
    }
    set diameter(value) {
        if(typeof value != 'number') {
            throw new Error('Diameter must be a number');
        }
       this.radius = value / 2;
    }
    get area() {
       return this.radius ** 2 * Math.PI;
    }
}

// const myCircle = new Circle(2);
//  myCircle.diameter = 8;

// console.log(myCircle.r);
// console.log(myCircle.diameter);

// console.log(myCircle.area);
const c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);