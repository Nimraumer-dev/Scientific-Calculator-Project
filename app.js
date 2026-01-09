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


function cos() {
    let result = document.getElementById("result")
    result.value = Math.tan(result.value)
}

function getResult() {

    let result = document.getElementById("result")
    if (!result.value) {
        result.value = "Syntax Error"
    }
    else {
        result.value = eval(result.value)
    }
}





