const Pi = Math.PI;

class Shape {
    protected x: number;
    protected y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    area() {
        return this.x * this.y;
    }
}


class Circle extends Shape {


    constructor(r: number) {
        super(r, 0);
    }

    area() {
        return Pi * Math.pow(this.x, 2);
    }

}

export { Circle }