import * as fs from "node:fs";

let input = fs.readFileSync("./input.txt", {encoding:"UTF-8"}).toString()

let test = ""


let list1 = []
let list2 = []

for(let line of input.split("\n")){

    let parse = line.split("   ")

    console.log("Adding new line")

    list1.push(Number(parse[0]))
    list2.push(Number(parse[1]))

}

part2()


function part2()    {

    let sum = 0;

    for(let i of list1){

        sum += list2.filter((x)=>i===x).length * i


    }

    console.log(sum)

}

function part1() {

    let sort = (a, b) => a - b

    list1.sort(sort)
    list2.sort(sort)

    let sum = 0;

    for (let i in list1) {
        sum += Math.abs(list1[i] - list2[i])
    }
    console.log(sum)
}