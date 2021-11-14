function shortestV2(str) {
    let arr = [];
    let myArray = str.split(" ");
    for (let i = 0; i < myArray.length; i++) {
        arr.push({ index: i, len: myArray[i].length });
    }
    arr.sort((a, b) => a.len - b.len);
    return arr[arr.length - 1].len;
}

console.log(shortestV2("Mahmood Irake mahmood mahmod mods mm"))