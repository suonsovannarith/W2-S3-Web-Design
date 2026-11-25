function challenge5(array) {
    let count = 0;
    let check = false; 
    for (let i = 1; i <= array.length; i++) {
        if (array[i] !== " " && !check) {
            count++;
            check = true;
        } else if (array[i] === " ") {
            check = false;
        }
    }

    return count;
}

function main() {
    let array = 'im a student';

    console.log(array);
    console.log(challenge5(array));
}

main();
