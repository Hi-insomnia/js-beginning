const container = document.querySelector(".container");
const btnCreate = document.getElementById("btn-create-task");
const newTask = document.getElementById("new-task");
const buttons = document.querySelector(".buttons");
let tasks = document.querySelectorAll(".task");



//добавление новорй задачи
btnCreate.addEventListener("click", function(event){
    event.preventDefault(); //отменяем обновление по умолчанию - форма не обновляет страницу
    let text = newTask.value;
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${text}</span>`;
    container.append(task); 
    tasks = document.querySelectorAll(".task");
    console.log(tasks);


})

//удаление всех задач
const btnRemove = document.getElementById("btn-remove");
btnRemove.addEventListener("click", function(){
    container.innerHTML = "";
    tasks = document.querySelectorAll(".task");
    console.log(tasks);

})

//сортировка по алфавиту
//let tasks = document.querySelectorAll(".task");
//const container = document.querySelector(".container");
const btnSort1 = document.getElementById("btn-sort1");
function compare(a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;

    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
   
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;

}

btnSort1.addEventListener("click", function (){
    let newTask = [...tasks].sort(compare)
    for (let i in newTask) {
        container.append(newTask[i])
    }
});


//обратная сортировка
const btnSort2 = document.getElementById("btn-sort2");
function compareReverse(a, b) {
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1;

    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
   
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1;

}

btnSort2.addEventListener("click", function (){
    let newTask = [...tasks].sort(compareReverse)
    for (let i in newTask) {
        container.append(newTask[i])
    }
});

const btnEmergency = document.getElementById("btn-emergency");
btnEmergency.addEventListener("click", function(){
    let newTask = [...tasks];
    
})