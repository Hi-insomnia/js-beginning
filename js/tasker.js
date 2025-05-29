const container = document.querySelector(".container");
const btnCreate = document.getElementById("btn-create-task");
const newTask = document.getElementById("new-task");

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