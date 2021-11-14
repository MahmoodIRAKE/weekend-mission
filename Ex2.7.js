function basicOp(op, n1, n2) {
    if (op === '/') {
        return n1 / n2;
    }
    if (op === '+') {
        return n1 + n2;
    }
    if (op === '-') {
        return n1 - n2;
    }
    if (op === '*') {
        return n1 * n2;
    }
    return 'this is not legal'

}

console.log(basicOp('-', 15, 18));
console.log(basicOp('+', 15, 18));
console.log(basicOp('*', 15, 18));