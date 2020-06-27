
function getNumber(num){
    var result = document.getElementById("result")
    result.value += num ;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "" 
}

function writeValue(){
    var result = document.getElementById("result");
    result.value = (result.value) 
}
function getResult(){
    var results = document.getElementById("results");
    results.value = eval(result.value) 
}