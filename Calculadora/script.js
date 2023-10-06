// This function clears all the values: accesses the DOM using the ID of the result and clears its value by assigning it an empty string
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values: accesses the DOM using the ID of the result and appends the value of the clicked button to the result.
function display(value) {
    document.getElementById("result").value += value;
}
 
/* This function evaluates the expression and returns the result: accesses the 
DOM using the ID of the result and evaluates the expression using the eval() function */
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// YO NO HICE NADA, SOLO COPIE Y PEGUE EL CODIGO. CREDITOS A YUVRAJ CHANDRA.
// https://www.makeuseof.com/author/yuvraj-chandra/