function toUpperCase2(char) {
    if (char <= 'z' && char >= 'a') {
        return (char - 'a') + 'A';
    }
    return char
}

function toCamelCase(str) {
    let res = '';
    let check = 0;
    let len = Math.max(str.split('-').length - 1, str.split('_').length - 1);
    let char = ((str.split('_').length - 1) > 0) ? "_" : "-";

    for (let i = 0; i <= len; i++) {
        res += str.slice(res.length, str.indexOf(char));
        str = str.replace(char, '');

    }
    return res;
}
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));