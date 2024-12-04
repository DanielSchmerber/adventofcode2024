import {readInput} from "../util.js";

let input = readInput("./input.txt").toString()+"";


const regex = /mul\((\d+),(\d+)\)/g;
let sum = 0;


let doMatcher = /do\(\)/g

let dontMatcher = /don't\(\)/g
let allowedMap = new Map()
allowedMap.set(0,true)
for(let matches of  input.matchAll(doMatcher)){
    allowedMap.set(matches.index,true)
}
for(let matches of  input.matchAll(dontMatcher)){
    allowedMap.set(matches.index,false)
}
console.log(allowedMap)

for(let matches of input.matchAll(regex)){

    let index = matches.index;

    while (!allowedMap.has(index)){
        index--;
    }

    if(allowedMap.get(index)) {
        sum += Number(matches[1]) * Number(matches[2])
    }
}
console.log(sum)
