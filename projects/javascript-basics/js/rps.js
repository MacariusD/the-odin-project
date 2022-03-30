function computerPlay() {
    let maxNum = 3//exclusive
    let minNum = 0 //inclusive
    let computerOptions = ['Rock', 'Paper', 'Scissors']

    return computerOptions[Math.floor(Math.random() * (maxNum - minNum)) + minNum];
}



console.log(computerPlay())