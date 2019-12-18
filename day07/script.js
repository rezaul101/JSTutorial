var database = [
	{
		username: "andrei",
		password: "supersecret"
	}
];


var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var puname = prompt("Your username");
var pp = prompt("Password");



function singIn(puser, ppass) {
    if (puser === database[0].username &&  ppass === database[0].password) {
        console.log(newsFeed);
    }else{
        alert("Wrong user name and password");
    }
}

singIn(userPuname,passWord);



//function declaration
function newFunction(){}


//function expression
var myFunction =  function newFunction(){};
var myFunction =  function (){};


//expretion
1+3;
var zero = 0;
return 1+2 ;

//calling a function
newFunction();
newFunction(ami,tumi);

