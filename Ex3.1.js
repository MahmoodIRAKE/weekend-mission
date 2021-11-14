function nb_year(p0, percent, aug, p) {
    let res = p0;
    let counter = 0;
    while (res < p) {
        counter++;
        res = res + res * (percent / 100) + aug;
    }
    return counter;
}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));