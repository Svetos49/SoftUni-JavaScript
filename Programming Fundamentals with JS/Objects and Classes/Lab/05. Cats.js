function cats(arr) {
    class Cat {
        constructor(catName, age) {
            this.catName = catName;
            this.age = age;

        }

        meow() {
            console.log(`${this.catName}, age ${this.age} says Meow`);
        }
    }

    for (catLine of arr) {
        let [catName, age] = catLine.split(' ');
        let cat = new Cat(catName, age);
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);