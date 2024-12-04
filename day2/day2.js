import fs from "node:fs";
import {readInput} from "../util.js";

let input = readInput("./input.txt");

let safeReports = 0;

for(let line of input){

    let isLegal = false;

    isLegal |= checkLine(line)
    let split = line.split(" ")
    for(let x in split){
        let tempArray = [...split]
        tempArray = tempArray.filter((a,b)=>{
            return b != x;
        })
        isLegal |= checkLine(tempArray.toString().replaceAll(","," "))
    }

    if(isLegal){
        safeReports++;
    }

}


function checkLine(line){

    let ordered = isOrder(line)

    let goodDistances = checkDistances(line,1,3)
    return ordered && goodDistances

}


console.log(safeReports)


function isOrder(report){

    let numbers = report.split(" ").map((x)=>Number(x))


    let ascending = (a,b) => a-b;
    let descending = (a,b) => b-a;

    let ascendingNumbers = [...numbers].sort(ascending)
    let descendingNumbers = [...numbers].sort(descending)


    function countErrors(a,b){
        let errors = 0;
        for(let temp in a){
            if(a[temp] != b[temp]){
                errors++
            }
        }
        return errors

    }
    return !Math.min(countErrors(numbers,ascendingNumbers),countErrors(numbers,descendingNumbers))

}

function checkDistances(array,minDistance,maxDistance){
    let numbers = array.split(" ").map((x)=>Number(x))

    let lastValue = numbers[0];

    for(let x = 1; x < numbers.length; ++x){
        let currentValue = numbers[x]

        let distance = Math.abs(currentValue-lastValue)

        if(distance > maxDistance || distance < minDistance){
            return false;
        }
        lastValue = currentValue;

    }

    return true;
}

