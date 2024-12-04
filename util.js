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
export function charAtPlayingField(x,y,playingField){
    if(!playingField[x]){
        return undefined
    }
    return playingField[x][y]
}