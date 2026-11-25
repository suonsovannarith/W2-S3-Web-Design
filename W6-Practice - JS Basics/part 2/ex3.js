function challenge3(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = sum / array.length;
    return average;
}

function main() {
    let array = [80, 95, 89, 100];
    
    console.log("Scores: ", array);
    console.log("Average: ", challenge3(array));
}

main();