//1 задание

const testText = document.querySelector(".test-text");

testText.style.background = "skyblue";
testText.style.border = "2px black solid";
testText.style.fontSize = "30px";

console.log(testText);


//2 задание

const mail = document.getElementById("mail");


const btn = document.getElementById("btn");
const email = document.getElementById("email");
email.disabled = true;

btn.addEventListener("click", function(){
    btn.textContent = 'войти';
})

email.setAttribute('disabled', '');
email. value = "mail@mail.ru";

const checkbox = document.querySelector("checkbox");

function rememberme (checkbox) {
    checkbox.disabled = true;
}


//3 задание 

const link = document.getElementById("link");

//считать значение атрибута
link.setAttribute("href", "https://getbootstrap.com/");

//4 задание

const button = document.getElementById("button");
const circle = document.querySelector(".circle");

btn.addEventListener("click", function(){
    //circle.style.transform = "translateX(600px)";
    circle.classList.toggle("move");
})