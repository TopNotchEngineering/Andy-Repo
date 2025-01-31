const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");
const button8 = document.querySelector("#button8");
const button9 = document.querySelector("#button9");
const plus1 = document.querySelector("#plus");
const minus1 = document.querySelector("#minus");
const times1 = document.querySelector("#times");
const divide1 = document.querySelector("#by");
const reset = document.querySelector("#c");
const screen = document.querySelector("#screen");
const del = document.querySelector("#delete");
let value = " ";
let index;
reset.onclick = resetScreen;
button1.onclick = clickbutton1;
button2.onclick = clickbutton2;
button3.onclick = clickbutton3;
button4.onclick = clickbutton4;
button5.onclick = clickbutton5;
button6.onclick = clickbutton6;
button7.onclick = clickbutton7;
button8.onclick = clickbutton8;
button9.onclick = clickbutton9;
plus1.onclick = plus;
minus1.onclick = minus;
times1.onclick = times;
divide1.onclick = divide;
del.onclick = deleted;
reset.onclick = resetScreen;

function setScreen(val){
    screen.innerText += val;    
}
function clickbutton(value) {
    screen.innerText = screen.innerText + "1"; 
}
// function clickbutton() {
//     setScreen;
// }
function clickbutton1() {
    value = "1"
    setScreen(value);
    // screen.innerText += value;
}
function clickbutton2() {
    value = "2"
    setScreen(value);
}
function clickbutton3() {
    value = "3"
    setScreen(value);
}
function clickbutton4() {
    value = "4"
    setScreen(value);
}
function clickbutton5() {
    value = "5"
    setScreen(value);
}
function clickbutton6() {
    value = "6"
    setScreen(value);
}
function clickbutton7() {
    value = "7"
    setScreen(value);
}
function clickbutton8() {
    value = "8"
    setScreen(value);
}
function clickbutton9() {
    value = "9"
    setScreen(value);
}
function resetScreen() {
    screen.innerText = "";
}
function deleted(){
    screen.innerText -= (screen.innerText % 10);
    //screen.innerText /= 10;
    console.log(screen.innerText);
    //value -= value[(value.length()) - 1];
    // console.log((value.length));
    // console.log(value);
}

function plus() {
    value = "+"
    setScreen(value);
}

function minus() {
    value = "-"
    setScreen(value);
}

function times() {
    value = "x"
    setScreen(value);
}

function divide() {
    value = "/"
    setScreen(value);
}
