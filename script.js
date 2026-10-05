

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response=>response.json())
    .then(data=>{console.log(data.name);});
document.getElementById("loginBtn").onclick= function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username==="") {
        document.getElementById("result").textContent="pleas enter your username";
    }
    else if (password==="") {
        document.getElementById("result").textContent="pleas enter your password";
    }

    else {
    document.getElementById("result").textContent= "hello dear " + username;
    }
};