const button1 = document.querySelector("#button1");

button1.onclick = welcome;
function welcome(){
    if(button1.innerText === "Welcome"){
        button1.innerText = "Welcomed"
        button1.style["background-color"] = "lightgrey";
        button1.style.color = "black";
    }
    else if(button1.innerText = "Welcomed"){
        button1.innerText = "Welcome"
        button1.style["background-color"] = "black";
        button1.style.color = "white";
    }
}