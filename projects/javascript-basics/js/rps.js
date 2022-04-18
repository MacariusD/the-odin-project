let round = 0
let uWin = 0
let cWin = 0
let gameCount = 0

function computerPlay() {
    let maxNum = 3//exclusive
    let minNum = 0 //inclusive
    let computerOptions = ['Rock', 'Paper', 'Scissors']

    return computerOptions[Math.floor(Math.random() * (maxNum - minNum)) + minNum];
}

function rockPlay(cplay) {
    if (cplay == 'Paper') {
        cWin += 1
        return 'You Lose! Paper beats Rock'
    } else if (cplay == 'Scissors') {
        uWin += 1
        return 'You Win! Rock beats Scissors'
    } else if (cplay == 'Rock') {
        return 'It\'s a Draw! Computer played Rock'
    }
}

function paperPlay(cplay) {
    if (cplay == 'Scissors') {
        cWin += 1
        return 'You Lose! Scissors beats Paper'
    } else if (cplay == 'Rock') {
        uWin += 1
        return 'You Win! Paper beats Rock'
    } else if (cplay == 'Paper') {
        return 'It\'s a Draw! Computer played Paper'
    }
}

function scissorsPlay(cplay) {
    if (cplay == 'Rock') {
        cWin += 1
        return 'You Lose! Rock beats Scissors'
    } else if (cplay == 'Paper') {
        uWin += 1
        return 'You Win! Scissors beats Paper'
    } else if (cplay == 'Scissors') {
        return 'It\'s a Draw! Computer played Scissors'
    }
}

function playerPlay(opt) {
    round += 1 
    let cplay = computerPlay()
    let result = ''
    if (opt == 'rock') {
        result = rockPlay(cplay)
    }else if (opt == 'paper') {
        result = paperPlay(cplay)
    }else if (opt == 'scissors') {
        result = scissorsPlay(cplay)
    }

    console.log(result)

    if (round == 5) {
        endFunction()
    }
}

function endFunction() {
    gameCount += 1
    document.getElementById("rps__begin").disabled = false;
    document.getElementById("rps__rock").disabled = true;
    document.getElementById("rps__paper").disabled = true;
    document.getElementById("rps__scissors").disabled = true;

    if (uWin > cWin) {
        console.log(`You won Game ${gameCount}`)
    } else if (cWin > uWin) {
        console.log(`AI won Game ${gameCount}`)
    } else {
        console.log(`Game ${gameCount} was a Draw`)
    }
}

function startFunction() {
    round = 0
    uWin = 0
    cWin = 0
    document.getElementById("rps__begin").disabled = true;
    document.getElementById("rps__rock").disabled = false;
    document.getElementById("rps__paper").disabled = false;
    document.getElementById("rps__scissors").disabled = false;
}

function clearHistory() {
    // used to clear history display
    gameCount = 0
}

// console.log(computerPlay())
// let happy = 20
// let go = `I am ${happy}`

// console.log (go)