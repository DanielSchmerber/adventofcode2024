import {readInput} from "../util.js";
import fs from "node:fs";
export function generateWrongLines() {
    let input = [...readInput("./input.txt")]
    let rules = [...readInput("./rules.txt")]
    console.log = () => {
    }
    let rulesOjects = []
    for (let rule of rules) {
        let temp = rule.split("|")
        rulesOjects.push(
            {
                x: Number(temp[0]),
                before: Number(temp[1])
            }
        )
    }

    let wrongLines = []
    let sum = 0;
    for (let lint of input) {
        console.log("NEW LINE            !!!!!!!!!!!!")
        let line = []
        let validLine = true;
        let visitedNumbers = new Map()
        for (let page of lint.split(",")) {
            let pageNum = Number(page)


            for (let r of rulesOjects) {
                if (r.x == pageNum) {
                    console.log(`Checking if ${r.x} is before ${r.before}`)
                    if (visitedNumbers.has(r.before)) {
                        validLine = false;
                        console.log("rule broken")


                    } else {
                        console.log("rule abliged")
                    }
                }
            }

            line.push(pageNum)


            visitedNumbers.set(pageNum, true)

        }
        if (validLine) {
            console.log(line)
            let middle = line[Math.floor(line.length / 2)]
            sum += middle
        } else {
            wrongLines.push(line)
        }

    }

    console.dir(sum)
    return  {
        wronglines:wrongLines,
        rules:rulesOjects}
}



