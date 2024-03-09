var calculated = false;
var ans = 0;
function appendToDisplay(value) {
    if (document.getElementById('rbox').value == 'Error' || calculated){
        calculated = false;
        clearDisplay();
    }
    document.getElementById('rbox').value += value;
}
function backspace() {
    document.getElementById('rbox').value = document.getElementById('rbox').value.substr(0, document.getElementById('rbox').value.length - 1);;
}

function clearDisplay() {
    document.getElementById('rbox').value = '';
}

function calculate() {
    try {
        document.getElementById('rbox').value = parseFloat(eval(document.getElementById('rbox').value.replace("^", "**")).toFixed(3));
        if (eval(document.getElementById('rbox').value > 10000000 || eval(document.getElementById('rbox').value < -10000000))){
            document.getElementById('rbox').value = eval(document.getElementById('rbox').value).toExponential(3);
        }
        ans = document.getElementById('rbox').value;
        calculated = true;
    } catch (error) {
        document.getElementById('rbox').value = 'Error';
    }
    
}
function sqrt() {
    var val = document.getElementById("rbox").value;
    document.getElementById("rbox").value = "Math.sqrt(" + document.getElementById("rbox").value + ")";
    calculate(document.getElementById("rbox").value);
}
