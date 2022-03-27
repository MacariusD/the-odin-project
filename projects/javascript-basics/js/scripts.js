// Javascript code for the javascript-basics project page

function clearDisplayFB() {
    var results = document.getElementById('numres');

    while (results.firstChild) {
        results.removeChild(results.firstChild);
    }
}

function fizzBuzz() {
    let result = document.getElementById('numres');
    clearDisplay()
    let unum = document.getElementById('unum').value;

    if (Number(unum)){
        for (let res_counter = 1;res_counter <= unum; res_counter++) {
            if (res_counter % 5 === 0 && res_counter % 3 === 0){
                result.insertAdjacentText("beforeend",'FizzBuzz, ');
            } else if (res_counter % 5 === 0){
                result.insertAdjacentText("beforeend",'Buzz, ');
            } else if (res_counter % 3 === 0){
                result.insertAdjacentText("beforeend",'Fizz, ');
            } else {
                result.insertAdjacentText("beforeend", res_counter + ', ');
            }
        }
    } else {
        result.insertAdjacentText("beforeend", 'Please Enter a Valid Number');
    }
}       