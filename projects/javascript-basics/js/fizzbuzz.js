// Javascript code for the javascript-basics project page
// Can be improved for readablity (use a validation)

function clearDisplayFB() {
    var results = document.getElementById('numRes');

    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
}

function fizzBuzz() {
    let result = document.getElementById('numRes');
    clearDisplayFB()
    let uNum = document.getElementById('uNum').value;

    if (Number(uNum)){
        for (let resCounter = 1;resCounter <= uNum; resCounter++) {
            if (resCounter % 5 === 0 && resCounter % 3 === 0){
                result.insertAdjacentText("beforeend",'FizzBuzz, ');
            } else if (resCounter % 5 === 0){
                result.insertAdjacentText("beforeend",'Buzz, ');
            } else if (resCounter % 3 === 0){
                result.insertAdjacentText("beforeend",'Fizz, ');
            } else {
                result.insertAdjacentText("beforeend", resCounter + ', ');
            }
        }
    } else {
        result.insertAdjacentText("beforeend", 'Please Enter a Valid Number');
    }
}      