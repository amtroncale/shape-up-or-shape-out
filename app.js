class Shape {
    constructor(width, height) {
        this.width = Number(width);
        this.height = Number(height);
        this.div = $('<div class="shape"></div>');
        $('#shape-canvas').append(this.div);
        this.div.click(() => this.describe());
        this.render();
        this.randomValue();
        this.randomPostion();
        this.div.dblclick(() => {
            this.div.remove()
            Swal.fire({
                title: 'Shape Removed!',
                text: 'Do you want to render another shape?',
                confirmButtonColor: '#000000',
            })
        })
    }       
    render() {
        this.div.css({
            height: this.height,
            width: this.width,
        });
    }
    randomValue(min, max) {
        return Math.floor(Math.random() * (max - min));
    }
    randomPostion() {
        this.div.css({
            top: `${this.randomValue(this.height, 600)}px`,
            left: `${this.randomValue(this.width, 600)}px`,
            height: this.height,
            width: this.width,
        })
    }
    describe() {
        $('#describe-height').val(this.height);
        $('#describe-width').val(this.width);
    }
    getArea() {
        let area = this.width * this.height;
        $('#describe-area').val(area);
    }
    getPerimeter() {
        let perimeter = (this.width + this.height) * 2;
        $('#describe-perimeter').val(perimeter);
    }
};

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.sideLength = Number(sideLength);
        this.div.attr('id', 'square');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#describe-shape').val('Square'));
    }
    getArea() {
        let area = this.sideLength * this.sideLength;
        $('#describe-area').val(area);
    }
    getPerimeter() {
        let perimeter = (this.sideLength * 2) * 2;
        $('#describe-perimeter').val(perimeter);
    }
}
$('#square-btn').click(function () {
    let sidePx = $('#side-px').val();
    new Square(sidePx, sidePx);
    $('#side-px').val('');
});

class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2);
        this.div.css({ borderRadius: '50%' });
        this.div.attr('id', 'circle');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#describe-shape').val('Circle'));
        this.div.click(() => $('describe-radius').val(this.width / 2));
    }
    getArea() {
        let radius = this.width / 2;
        let area = Math.PI * Math.pow(radius, 2);
        $('#describe-area').val(area);
    }
    getPerimeter() {
        let perimeter = 2 * Math.PI * (this.width / 2);
        $('#describe-perimeter').val(perimeter);
    }
}
$('#circle-btn').click(function () {
    let radius = $('radius-px').val();
    new Circle(radius);
    $('#radius-px').val('');
});
new Circle

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.attr('id', 'rectangle');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#describe-shape').val('Rectangle'));
    }
}
$('#rectangle-btn').click(function () {
    let rectWidth = $('#width-px').val();
    let rectHeight = $('#height-px').val();
    new Rectangle(rectWidth, rectHeight);
    $('#width-px').val('');
    $('#rect-height-px').val('');
});

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.height = Number(height)
        this.div.attr('id', 'triangle');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#describe-shape').val('Triangle'));
        this.div.css({
            height: 0,
            width: 0,
            borderTop: `${this.height}px solid yellow`,
            borderLeft: `${this.width}px solid transparent`,
            borderBottom: 0,
            borderRight: 0,
        });
    }
    getArea() {
        let area = 0.5 * this.height * this.height;
        $('#describe-area').val(area);
    }
    getPerimeter() {
        let perimeter = 2 * this.height + Math.SQRT2 * this.height;
        $('#describe-perimeter').val(perimeter);
    }
};
$('#triangle-btn').click(function () {
    let triHeight = $('#triangle-height').val();
    new Triangle(triHeight);
    $('#triangle-heigt').val('');
});