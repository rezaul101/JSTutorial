const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  //console.log(basket[i]);
  document.getElementById("demo1").innerHTML  = ([i]);
}

//2
basket.forEach(item => {
  //console.log(item);
  document.getElementById("demo2").innerHTML  = (item);
})

for (item in detailedBasket) {
  //console.log(item);
}
 document.getElementById("demo3").innerHTML  = (item);
for (item of basket) {
  //console.log(item);
  document.getElementById("demo4").innerHTML  = (item);
}

