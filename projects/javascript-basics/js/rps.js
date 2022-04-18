function computerPlay() {
    let maxNum = 3//exclusive
    let minNum = 0 //inclusive
    let computerOptions = ['Rock', 'Paper', 'Scissors']

    return computerOptions[Math.floor(Math.random() * (maxNum - minNum)) + minNum];
}

function rockPlay(cplay) {
    if (cplay == 'Paper') {
        return 'You Lose! Paper beats Rock'
    } else if (cplay == 'Scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (cplay == 'Rock') {
        return 'It\'s a Draw! Computer played Rock'
    }
}

function paperPlay(cplay) {
    if (cplay == 'Scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (cplay == 'Rock') {
        return 'You Win! Paper beats Rock'
    } else if (cplay == 'Paper') {
        return 'It\'s a Draw! Computer played Paper'
    }
}

function scissorsPlay(cplay) {
    if (cplay == 'Rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (cplay == 'Paper') {
        return 'You Win! Scissors beats Paper'
    } else if (cplay == 'Scissors') {
        return 'It\'s a Draw! Computer played Scissors'
    }
}

function playerPlay(opt) {
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
}

function roundCheck() {

}

// console.log(computerPlay())
// let happy = 20
// let go = `I am ${happy}`

// console.log (go)