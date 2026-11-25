function challenge4(array, char){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == char) {
            count++;
        }
    }
    return count;
}

function main() {
    let array = 'hello world';

    console.log(array);
    console.log(challenge4(array, 'h'));
}

main();