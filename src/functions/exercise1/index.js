const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];

function minorValue(array) {
    let mi = array.length;
    minor = array[mi-1];
    while (mi--) {
        if (array[mi] < minor) {
            minor = array[mi]
        }
    }
    return minor;  
}

let a = minorValue(numbers1);
let b = minorValue(numbers2);
let c = minorValue(numbers3);
let d = minorValue(numbers4);

console.log("El menor valor es:", a)
console.log("El menor valor es:", b)
console.log("El menor valor es:", c)
console.log("El menor valor es:", d)



























/*SOLUCIONADO
const numbers1 = [22,1,4,3,5,7,8,9,12,11];
const numbers2 = [22,7,4,3,5,7,8,9,12,11];
const numbers3 = [22,6,4,4,5,7,8,9,12,11];
const numbers4 = [22,9,6,8,5,7,8,9,12,11];

function minorValue(array) {
    let mi = array.length;
    minor = array[mi-1];
    while (mi--) {
        if (array[mi] < minor) {
            minor = array[mi]
        }
    }
    return minor;  
}

let a = minorValue(numbers1);
let b = minorValue(numbers2);
let c = minorValue(numbers3);
let d = minorValue(numbers4);



console.log("El menor valor es:", a)
console.log("El menor valor es:", b)
console.log("El menor valor es:", c)
console.log("El menor valor es:", d)
*/