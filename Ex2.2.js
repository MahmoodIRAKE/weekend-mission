function FromBinary(arr) {
    let res = 0;
    let i = 0;
    while (arr.length > 0) {

        let temp = arr.pop();

        res = res + (temp * (2 ** i));
        i++;

    }
    return res;
}

console.log(FromBinary([0, 0, 0, 1]));
console.log(FromBinary([0, 0, 1, 0]));
console.log(FromBinary([0, 1, 0, 1]));
console.log(FromBinary([1, 0, 0, 1]));
console.log(FromBinary([0, 0, 1, 0]));
console.log(FromBinary([0, 1, 1, 0]));
console.log(FromBinary([1, 1, 1, 1]));
console.log(FromBinary([1, 0, 1, 1]));