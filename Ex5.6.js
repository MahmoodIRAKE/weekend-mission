function repeatStr(n, str) {
    let res = '';
    for (let i = 0; i < n; i++) {

        res += str;
    }
    return res;
}

function maskify(str) {
    if (str.length <= 4) {
        return str;
    }
    let res = repeatStr(str.length - 4, '#');
    res += str[str.length - 4];
    res += str[str.length - 3];
    res += str[str.length - 2];
    res += str[str.length - 1];
    return res;

}
console.log(maskify("4556364607935616"));
console.log(maskify("Nananananananananananananananana Batman!"));