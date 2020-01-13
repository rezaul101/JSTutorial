
myFunction();
// code here can use carName as a global variable
document.getElementById("demo1").innerHTML = "I can display " + carName;
function myFunction() {
  carName = "Volvo1";
}

var carName = "Volvo2";
myFunction2();

function myFunction2() {
  document.getElementById("demo2").innerHTML = "I can display " + carName;
}

// #1
/*
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
*/
//#2
/*
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
*/

//#3
/*
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
*/
//#4
/*
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
*/
//#5
/*
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
*/