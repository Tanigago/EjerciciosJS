numbers = [4, 2, 9, 6, 1, 0, 3, 6, 5, 2, 9];

function aGreatherThanB(a, b) {
    return a > b
}

function bGreatherThanA(a, b) {
    return b > a
}

function swap(idxA, idxB, numbers) {
    if (numbers[idxA] > numbers[idxB]) {
        temp = numbers[idxA];
        numbers[idxA] = numbers[idxB];
        numbers[idxB] = temp;
        console.log(numbers)
    }
}

function sort(comparator, numbers) {
    for (let currentIdx = 0; currentIdx < numbers.length - 1; currentIdx++) {
        for (let nextIdx = currentIdx + 1; nextIdx < numbers.length; nextIdx++) {
            if (
                comparator(numbers[currentIdx], numbers[nextIdx])
            ) swap(currentIdx, nextIdx, numbers)
        }
    }
}

console.log(numbers);
sort(aGreatherThanB, numbers);
console.log(numbers);
sort(bGreatherThanA, numbers);
console.log(numbers);