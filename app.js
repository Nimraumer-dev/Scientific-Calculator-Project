function getNum(num) {
    let result = document.getElementById("result")
    result.value += num;
}

function clearResult() {
    let result = document.getElementById("result")
    result.value = ""
}


function delChar() {
    let result = document.getElementById("result")
    result.value = result.value.slice(0, -1)
}

function sin() {
    let a = Number(result.value);
    result.value = Math.sin(a * Math.PI / 180);
}
function cos() {
    let a = Number(result.value);
    result.value = Math.cos(a * Math.PI / 180);
}
function tan() {
    let a = Number(result.value);
    result.value = Math.tan(a * Math.PI / 180);
}

function sqrt() {
    result.value = Math.sqrt(Number(result.value));
}


function sq(){
    let a = Number(result.value);
    result.value = a * a;
}

function ln(){
    result.value = Math.log(Number(result.value));
}

function exp(){
    result.value = Math.exp(Number(result.value));
}

function sign(){
    result.value = Number(result.value) * -1;
}

function getResult() {

    let result = document.getElementById("result")
    if (!result.value) {
        result.value = "                           Syntax Error"
    }
    else {
        result.value = eval(result.value)
    }
}





