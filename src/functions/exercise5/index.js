/*const numbers = [11,9,13,12]

// Put your code here

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3),numbers);
*/

const numbers = [11,9,13,12];

function minorInRange(array) {
    let mi = array.length;
    minor = array[mi-1];
    while (mi--) {
        if (array[mi] < minor) {
            minor = array[mi]
        }
    }
    return minor;  
}

let a = minorInRange((0,3),numbers);

console.log("El menor valor es:", a)
