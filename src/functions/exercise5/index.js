const numbers = [11,9,13,12]

function minorInRange ( principio , final , numbers){
    let principio = numbers[principio];
    let final = numbers[final];
    
    let mi = array.length;
    minor = array[mi-1];
    while (mi--) {
        if (array[mi] < minor) {
            minor = array[mi]
        }
    }
    return minor;
}

console.log(minorInRange(0,3,numbers));
console.log(minorInRange(2,3,numbers));
console.log(minorInRange(1,3),numbers);