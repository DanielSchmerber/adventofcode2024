import {generateWrongLines} from "./day5.js";

let result = generateWrongLines()


function swap(a,b,array){
    let temp = array[a]
    array[a] = array[b]
    array[b] = temp;
    console.dir(array)
}

for(let line of result.wronglines){
    fixLine(line)
}

console.dir(result.wronglines[0])

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
                console.dir(`the number ${currentNum} is not before ${forbiddenNumber} `)
                legalLine = false;

                console.dir(array)
                console.dir(i)
                console.dir(array.indexOf(forbiddenNumber))

                swap(i, array.indexOf(forbiddenNumber), array)

                console.dir(array)
            }


            visitedNumbers.set(currentNum, true)

        }

    }
    console.dir(`fixed line after ${scanIndex} scans`)



}

console.dir(`Updated line ${result.wronglines[0]}`)

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