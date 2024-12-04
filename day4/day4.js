import fs from "node:fs";
import {readInput} from "../util.js";
let combinedInput = ""
let input = [...readInput("./input.txt")]

let fast = true;
if(fast){
    console.log = ()=>{}
}

let y = 0;

let playingField = [];

for(let line of input){
    let x = 0;
    let trimmedLine = line.trim()
    trimmedLine.split("").forEach((char,index)=>{
        playingField[index]=playingField[index]??[]
        playingField[index][y]=char
    })
    y++;
}

function charAt(x,y){
    if(!playingField[x]){
        return undefined
    }
    return playingField[x][y]
}

let walkers = [
    (x,y)=> {
        return {
            x: ++x, y:y
        }
    },
    (x,y)=>{
        return {
            x: --x, y:y
        }
    },
    (x,y)=>{
        return {
            x: x, y:++y
        }
    },
    (x,y)=>{
        return {
            x: x, y:--y
        }
    },
    (x,y)=>{
        return {
            x:++x,
            y:++y
        }
    },
    (x,y) =>{
        return {
            x:--x,
            y:--y,
        }
    },
    (x,y) =>{
        return {
            x:++x,
            y:--y,
        }
    },
    (x,y) =>{
        return {
            x:--x,
            y:++y,
        }
    }
]

let xCood = 0;
console.log(playingField)

function checkForXmas(startPoint,walkingfunction){
    let startX = startPoint.x;
    let startY = startPoint.y;
    let XMAS ="XMAS!"
    let counter = 0;
    while (charAt(startX,startY)){

        if(charAt(startX,startY) == XMAS[counter]) {
            console.log(XMAS[counter])
            counter++;
        }else{
            return false;
        }

        if( XMAS[counter] == "!"){
            return true
        }


        let temp = walkingfunction(startX,startY);
        startY = temp.y;
        startX = temp.x;
    }



}

let xmasCounter = 0;

for(let x of playingField){
    let yCoord = 0;
    for(let y of playingField[0]){
        console.log(`Checking position ${xCood + " "+ yCoord}`)

        for (let func of walkers){

            console.log()

            let XMAS = checkForXmas({x:xCood,y:yCoord},func);

            if(XMAS){
                console.log(`Found XMAS at ${x +" " + y + " " + func}`)
                xmasCounter++;
            }
        }
        yCoord++;

    }
    xCood++;
}

console.dir(`Found ${xmasCounter} Christmases`)