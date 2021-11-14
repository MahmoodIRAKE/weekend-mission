function findNextSquare(n) {
    if (!Number.isInteger(Math.sqrt(n))) {
        return -1;
    }
    let temp = Math.sqrt(n);
    temp++;
    return temp ** 2

}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(676));
console.log(findNextSquare(114));
console.log(findNextSquare(49));