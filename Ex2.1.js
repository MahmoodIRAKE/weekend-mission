function SumOfLowest(arr) {
    if (arr.length < 4) {
        return "The Lenght is not legal"
    }
    let counter = 0;
    let sum = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || !Number.isInteger(arr[i])) {
            continue;
        }
        if (counter >= 2) {
            return sum;
        }
        counter++;
        sum += arr[i];

    }

}

console.log(SumOfLowest([19, 5, 42, 2, 77]));
console.log(SumOfLowest([10, 343445353, 3453445, 3453545353453]));