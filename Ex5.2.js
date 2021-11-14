function repeatStr(n, str) {
    let res = '';
    for (let i = 0; i < n; i++) {

        res += str;
    }
    return res;
}
console.log(repeatStr(6, "I"));
console.log(repeatStr(6, "Hello"));