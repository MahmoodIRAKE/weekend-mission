function tribonacci(num) {
    let arr = [1, 1, 1];
    if (num === 0) {
        return [];
    }
    if (num === 3) {
        return arr;
    }
    if (num < 3) {
        for (let i = 0; i < num; i++) {
            arr.pop();
        }
        return arr;
    }
    let temp = arr[0] + arr[1] + arr[2];
    for (let i = 4; i <= num; i++) {
        arr.push(temp);
        temp = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }
    return arr;
}

console.log(tribonacci(8));