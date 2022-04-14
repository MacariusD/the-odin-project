function computerPlay() {
    let maxNum = 3//exclusive
    let minNum = 0 //inclusive
    let computerOptions = ['Rock', 'Paper', 'Scissors']

    return computerOptions[Math.floor(Math.random() * (maxNum - minNum)) + minNum];
}

function playerPlay(opt) {

}


console.log(computerPlay())
// let happy = 20
// let go = `I am ${happy}`

// console.log (go)