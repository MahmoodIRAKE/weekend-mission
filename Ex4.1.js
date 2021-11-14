function fibonacci(num) {
    let a1 = 1;
    let a2 = 1;
    let current = 1;
    if (num <= 2) {
        return 1;
    }
    for (let i = 3; i <= num; i++) {
        let temp = a1 + a2;
        a1 = a2;
        a2 = temp;
    }
    return a2;
}

console.log(fibonacci(11));