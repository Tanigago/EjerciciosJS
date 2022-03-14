const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];

for (let item of mix) {
    let strings = [];
    let numbers = [];
    // Put your code here
}

console.log("Strings:",strings,"Numbers:",numbers)































const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
let strings = [];
let numbers = [];

for (let item of mix) {
    if (typeof item === "string") {
        strings.push(item);
    }
    if (typeof item === 'number') {
        numbers.push(item);
    }
}

console.log("Strings:",strings,"Numbers:",numbers)





















/*SOLUCIONADO
const mix = [undefined,22,"1",4,3,"5",7,NaN,8,"9","12",11,null];
let strings = [];
let numbers = [];

for (let item of mix) {
    if (typeof item === "string") {
        strings.push(item);
    } else if (typeof item === "number") {
        numbers.push(item);
    }
}

/*for (let idx = 0 ; idx < mix.length ; idx++) {
    if (typeof mix[idx] === "string") {
        strings.push(mix[idx]);
    } else if (typeof mix[idx] === "number") {
        numbers.push(mix[idx]);
    }
}*/

/*
console.log("Strings:",strings,"Numbers:",numbers)
*/