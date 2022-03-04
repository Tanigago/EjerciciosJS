const numbers = [11, 9, 13, 12]

for (let idx = a; idx < b + 1; idx++) {
    console.log(numbers[idx]);
    
    function minorInRange(numbers) {
        let mi = numbers.length;
        minor = numbers[mi - 1];
        while (mi--) {
            if (numbers[mi] < minor) {
                minor = numbers[mi]
            }
        }
        return minor;
    }
}


let a = minorInRange(numbers);
console.log("El menor valor es:", a)

console.log(minorInRange(0, 3, numbers));
console.log(minorInRange(2, 3, numbers));
console.log(minorInRange(1, 3), numbers);

/*
//este for funciona para limitar un array
for (let idx = 3; idx < 6 ; idx++) {
    console.log(numbers[idx]);
}

//esto lo use para buscar el menor numero del array
const numbers1 = [22,1,4,3,5,7,8,9,12,11];

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
console.log("El menor valor es:", a)
*/