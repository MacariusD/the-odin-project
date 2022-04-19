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

    // console.log(result)
    let resultDisp = document.getElementById('rps__gameDisp__output')
    resultDisp.insertAdjacentText("beforeend", `${result}`)

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

    let histDisp = document.getElementById('rps__historyDisp__output')
    if (uWin > cWin) {
        // console.log(`You won Game ${gameCount}`)
        histDisp.insertAdjacentText("beforeend",`You won Game ${gameCount}`)
    } else if (cWin > uWin) {
        // console.log(`AI won Game ${gameCount}`)
        histDisp.insertAdjacentText("beforeend",`AI won Game ${gameCount}`)
    } else {
        // console.log(`Game ${gameCount} was a Draw`)
        histDisp.insertAdjacentText("beforeend",`Game ${gameCount} was a Draw`)
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

    // clear results display
    let resultDisp = document.getElementById('rps__gameDisp__output')
    while (resultDisp.firstChild) {
        resultDisp.removeChild(resultDisp.firstChild);
    }
}

function clearHistory() {
    // used to clear history display
    gameCount = 0
    let histDisp = document.getElementById('rps__historyDisp__output')
    while (histDisp.firstChild) {
        histDisp.removeChild(histDisp.firstChild);
    }
}

// console.log(computerPlay())
// let happy = 20
// let go = `I am ${happy}`

// console.log (go)