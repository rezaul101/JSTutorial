

const 
startLine = 'exam1';
let turtle = 'exam2';
let rabbit = 'exam2';

document.getElementById("demo1").innerHTML  = rabbit.padStart(8);



let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')
//document.getElementById("demo2").innerHTML  = (value);