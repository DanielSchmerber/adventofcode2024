import {generateWrongLines} from "./day5.js";

let result = generateWrongLines()


function swap(a,b,array){
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp;
}

for(let line of result.wronglines){
    fixLine(line)
}


function fixLine(array){


    let legalLine = false;
    let scanIndex = 0;
    while (!legalLine) {
        scanIndex++;
        legalLine = true;
        let visitedNumbers = new Map()

        for (let i = 0; i < array.length; ++i) {

            let currentNum = array[i]

            let forbiddenNumber = breakesRule(currentNum, visitedNumbers, result.rules)

            if (forbiddenNumber != undefined) {
                legalLine = false;
                swap(i, array.indexOf(forbiddenNumber), array)

            }


            visitedNumbers.set(currentNum, true)

        }

    }
    console.dir(`fixed line after ${scanIndex} scans`)



}


function breakesRule(number,visitedNumbers,rules) {

    for (let r of rules) {
        if (r.x == number) {
            console.log(`Checking if ${r.x} is before ${r.before}`)
            if (visitedNumbers.has(r.before)) {
                return r.before;
            }
        }
    }
}

let sum = 0;
for(let line of result.wronglines){
    let middle = line[Math.floor(line.length / 2)]
    sum +=middle;

}
console.dir(sum)