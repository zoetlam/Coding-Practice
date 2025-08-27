/* Write a function `Rectangle(a, b)` that returns an object with length, width, perimeter, 
        area parameter*/

function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    };
}
