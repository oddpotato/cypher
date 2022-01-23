let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let array2 = [2, 3, 4]

const whackyarray2Duplication = array2.concat(array2);
// console.log(whackyarray2Duplication);

const matchUp = function(a, b) {
    console.log(b)
    do {
        growingB = b.concat(b);
        b = growingB
    } while (a.length > b.length);
    console.log(b);
    console.log(a.length);
    console.log(b.length);
    // let keyLength = b.length;
    // let inputEvent = a.length;
    if (b.length > a.length) {
        b.slice(a.length)
        console.log(b)
    }
}
matchUp(array1, array2)