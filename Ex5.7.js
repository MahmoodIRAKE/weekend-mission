function shortest(str) {
    let arr = [];
    let myArray = str.split(" ");
    for (let i = 0; i < myArray.length; i++) {
        arr.push({ index: i, len: myArray[i].length });
    }
    arr.sort((a, b) => a.len - b.len);
    return arr[0].len;
}

console.log(shortest("Mahmood Irake mahmood mahmod mods mm"))