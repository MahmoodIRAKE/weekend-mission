function centuryFromYear(n) {
    if (n % 100 === 0) {
        return n / 100;
    }
    return parseInt(n / 100 + 1);
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1800));
console.log(centuryFromYear(1905));