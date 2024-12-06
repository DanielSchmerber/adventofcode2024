import fs from "node:fs";

export function readInput(path){

    return  fs.readFileSync(path, {encoding:"UTF-8"}).toString().split("\n")

}

export function inputToPlayingField(input){
    let playingField = [];
    let y = 0;
    for(let line of input){
        let x = 0;
        let trimmedLine = line.trim()
        trimmedLine.split("").forEach((char,index)=>{
            playingField[index]=playingField[index]??[]
            playingField[index][y]=char
        })
        y++;
    }
    return playingField;
}
export function degrees_to_radians(degrees)
{
    // Store the value of pi.
    var pi = Math.PI;
    // Multiply degrees by pi divided by 180 to convert to radians.
    return degrees * (pi/180);
}


export function charAtPlayingField(x,y,playingField){
    if(!playingField[x]){
        return undefined
    }
    return playingField[x][y]
}