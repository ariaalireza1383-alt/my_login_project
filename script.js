let userDataLoaded=false;
function updateLoginButton() {
    let username = document.getElementById("username").value;
    let passwors = document.getElementById("password").value;

    document.getElementById("loginBtn").disabled=
        !userDataLoaded || username.trim()==="" || passwors.trim()==="";
}
async function getuser() {
    try {
        document.getElementById("apiStatus").textContent="Loading user data...."
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) {
        throw new Error("request failed")
    };
    let data = await response.json();
    
    document.getElementById("apiResult1").textContent= data.name;
    document.getElementById("apiResult2").textContent= data.username;
    document.getElementById("apiResult3").textContent= data.email;
    userDataLoaded=true;
    updateLoginButton();
   
    document.getElementById("apiStatus").textContent = "User data loaded succsessfully";
    }catch (error){
        
        document.getElementById("apiStatus").textContent = "could not load user data";
        userDataLoaded = false;
        updateLoginButton();

     }

    
    
}
document.getElementById("username").addEventListener("input",  updateLoginButton);
document.getElementById("password").addEventListener("input", updateLoginButton);
getuser();
document.getElementById("loginBtn").onclick= function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let name = document.getElementById("apiResult1").textContent;
    let user = document.getElementById("apiResult2").textContent;
    let email = document.getElementById("apiResult3").textContent;
    
    
    if (username!==user) {
        document.getElementById("result").textContent="pleas enter your username corretlly";
    }
    else if (password!== email) {
        document.getElementById("result").textContent="pleas enter your password corrrectlly";
    }

    else {
    document.getElementById("result").textContent= "hello dear " + name;
    }
};
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "My first post",
        body: "I built my first web project",
        userId: 1
    })
})
    .then(response => response.json())
    .then(data => {
        document.getElementById("postResult").textContent=data.title;
    });