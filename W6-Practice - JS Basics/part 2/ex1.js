function challenge1(width, height) { 
    let rectangleString = ''; 
    // Your code 
    if (width <= 0 || height <= 0) {
        return rectangleString;
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangleString += '*';
        }
        if (i < height - 1) {
            rectangleString += '\n';
        }
    }
    return rectangleString; 

} 

function main() {
    console.log("--- (3,4) ---");
    console.log(challenge1(3,4));

    console.log("--- (5,2) ---");
    console.log(challenge1(5,2));

    console.log("--- (5,-2) ---");
    console.log(challenge1(5,-2));

}

main();