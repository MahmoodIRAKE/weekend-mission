function PeopleOnTheBus(arr) {
    let busup = 0;
    let busdown = 0;
    for (let i = 0; i < arr.length; i++) {
        busup += arr[i][0];
        busdown += arr[i][1];
    }
    return busup - busdown;
}

console.log(PeopleOnTheBus([
    [5, 0],
    [8, 5],
    [10, 8],
    [10, 5],
    [1, 10]
]));