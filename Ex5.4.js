function toUpperCase2(char) {
    if (char <= 'z' && char >= 'a') {
        return ('' + char).toUpperCase();
    }
    return char
}

function toLowerCase2(char) {
    if (char <= 'Z' && char >= 'A') {
        return ('' + char).toLowerCase();
    }
    return char
}

function toWeirdCase(str) {
    let res = '';
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
        if (temp % 2 === 0) {
            res += toUpperCase2(str[i]);
        }
        if (temp % 2 !== 0) {
            res += toLowerCase2(str[i]);
        }
        temp++;
        if (str[i] === ' ') {
            temp = 0;
        }
    }
    return res;
}
console.log(toWeirdCase("Weird string case"));