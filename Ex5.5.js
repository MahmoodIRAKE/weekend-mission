function abbTwoWords(str) {
    let res = '';
    res += ('' + str[0]).toUpperCase();
    res += '.'
    res += ('' + str[str.indexOf(" ") + 1]).toUpperCase();
    return res;
}
console.log(abbTwoWords("mahmood Irake"));
console.log(abbTwoWords("Mahmood Irake"));