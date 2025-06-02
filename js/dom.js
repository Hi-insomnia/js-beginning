//1 - выбрать элемент (тег) на странице
//1.1 - выбор элемента по id
const h1 = document.getElementById("title");
console.log(h1);
//1.2 - ВЫбор элемента по селектору
const menu = document.querySelector(".menu *");
console.log(menu);
//1.3 - Выбор нескольких элементов по селектору
const links = document.querySelectorAll("a.link");
console.log(links);

//2 - Работа с контентом (содержимым тегов)
console.log(h1.textContent); //чтение содержимого без тегов
console.log(h1.innerHTML); //чтение содержимого с тегами
console.log(h1.innerText); //
console.log(h1.outerHTML);
console.log(h1.outerText);

h1.textContent = "Новый заголовок, <img src'img/tree-fill.svg' alt='лого'>"; //изменить содержимое, теги воспринимаются как текст
h1.innerHTML = "Новый заголовок, <img src'img/tree-fill.svg' alt='лого'>"; //изменить контент с тегами

//3 - работа со стилями (атрибут style)
menu.style.background = "#92ec00";
menu.style.border = "2px green solid";
menu.style.fontSize = "30px";

//4 - работа с классами (атрибут class)
const block = document.getElementById("block");
block.classList.add("border"); //добавление нового класса

block.classList.add("large");

block.classList.remove("large"); //удалить класс

console.log(block.classList.contains("border")); //проверка, есть ли у элемента этот класс

//5 - работа с атрибутами

const link = document.querySelector(".link");
console.log(link.getAttribute("href"));

//считать значение атрибута
link.setAttribute("href", "https://getbootstrap.com/"); //установить или изменить атрибут

link.removeAttribute("href"); //удалить атрибут

//6 - создание нового элемента

const image = document.createElement("img"); //создание тега
image.setAttribute("src", "img/енот.jpg");//добавление атрибута src
image.setAttribute("alt", "енот");//добавление атрибута alt

block.append(image);//добавляем картинку в блок

//7 - работа с потомками
console.log(document.querySelectorAll("a"));
console.log(menu.querySelectorAll("a"));

//8 - работа с предками
const lastlink = document.querySelector(".menu li:last-child a");
console.log(lastlink);
const parent = lastlink.closest("li"); //взять ближайшего предка с заданным селектором
console.log(parent);

// 9 - работа с событиями
const btn = document.getElementById("btn");
const circle = document.querySelector(".circle");

btn.addEventListener("click", function(){
    //circle.style.transform = "translateX(600px)";
    circle.classList.toggle("move");
})


