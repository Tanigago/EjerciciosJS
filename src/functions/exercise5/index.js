const numbers = [11,9,13,12]

function minorInRange(a, b, numbers) {
    let minor = Infinity;
    for (let idx = a; idx <= b ; idx++) {
        if (numbers[idx] < minor) {
            minor = numbers[idx];
        }
     
    }
    return minor;
}

console.log("El menor valor es:", minorInRange(0,3,numbers));
console.log("El menor valor es:", minorInRange(2,3,numbers));
console.log("El menor valor es:", minorInRange(1,3,numbers));