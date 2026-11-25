function challenge6(array) {
    if (array.length == 0) {
        return "There is no votes yet!";
    }

    let countA = 0;
    let countB = 0;
    let countC = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'A') {
            countA++;
        } else if (array[i] === 'B') {
            countB++;
        } else if (array[i] === 'C') {
            countC++;
        }
    }

    let max = countA;
    const winners = [];
    if (countB > max) {
        max = countB;
    }
    if (countC > max) {
        max = countC;
    }

    if (countA === max) winners.push("A");
    if (countB === max) winners.push("B");
    if (countC === max) winners.push("C");
    

    if (winners.length === 1) {
        return `${winners[0]} is the winner`;
    } else if (winners.length === 2) {
        return `${winners[0]} and ${winners[1]} are the winners`;
    } else if (winners.length === 3) {
        return `${winners[0]}, ${winners[1]} and ${winners[2]} are the winners`;
    }
}

function main() {
    let array = ["A", "B", "A", "C", "B", "C"];

    console.log(array);
    console.log(challenge6(array));
}

main();