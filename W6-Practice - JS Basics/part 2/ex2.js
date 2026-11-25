function challenge2(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

function main() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log("Original: ", array);
    console.log("Reversed: ", challenge2(array));
}

main();