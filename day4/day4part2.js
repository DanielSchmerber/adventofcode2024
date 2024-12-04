import fs from "node:fs";
import {charAtPlayingField, inputToPlayingField, readInput} from "../util.js";
let combinedInput = ""
let input = [...readInput("./input.txt")]

let playingField = inputToPlayingField(input)

let filters =
    [
        [
            "S*S",
            "*A*",
            "M*M"
        ],
        [
            "M*M",
            "*A*",
            "S*S"
        ],
        [
            "M*S",
            "*A*",
            "M*S"
        ],
        [
            "S*M",
            "*A*",
            "S*M"
        ]
    ]
let matchcounter = 0;
for(let filter of filters) {
    for (let x = 0; x < playingField.length-2; ++x) {
        for (let y = 0; y < playingField[0].length-2; ++y) {
            let char = charAtPlayingField(x, y, playingField)

            let match = checkFilter(filter,x,y,playingField)
            if(match){
                matchcounter++;
            }
        }
    }
}
console.log(matchcounter)

function checkFilter(filter,xStart,yStart,playingField){

    for(let x = 0; x < 3; ++x){
        for(let y = 0; y < 3; ++y){
            let char = charAtPlayingField(xStart+x,yStart+y,playingField)
            let filterChar = filter[y][x]

            if(filterChar == "*" || char==filterChar){
                console.log(filters.indexOf(filter) + " matched")
            }else{
                return false
            }
        }
    }
    return true
}

