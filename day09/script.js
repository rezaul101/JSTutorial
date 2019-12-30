var database = [
    {
        username: "reza",
        password: "password"
    },
    {
        username: "rasel",
        password: "12345"
    },
    {
        username: "alamin",
        password: "123"
    },
    {
        username: "subbir",
        password: "1234"
    }
];
var newsFeed = [
    {
        username: "Sabbir",
        timeline: "Sa anok kotha pora bolbo!"
    },
    {
        username: "Dip",
        timeline: "Dekhben jal hobe ghuni!"
    },
    {
        username: "alamin",
        timeline: "Sa anok kotha pora bolbo!"
    }
];




function isUserValid(username,password) {
    for(var i=0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function singIn(username, password) {

    if (isUserValid(username,password)) {
        document.getElementById("username").innerHTML = "reza!";
        document.getElementById("post").innerHTML = "Thanks For Login!!";
        document.getElementById("feed").innerHTML = "Hello Every body";
    }else{
        alert("Wrong user name and password");
    }
}


var puname = prompt("Your username");
var pp = prompt("Password");
singIn(puname,pp);