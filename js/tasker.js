const container = document.querySelector(".container");
const btnCreate = document.getElementById("btn-create-task");
const newTask = document.getElementById("new-task");
const buttons = document.querySelector(".buttons");
let tasks = document.querySelectorAll(".task");



//добавление новой задачи
btnCreate.addEventListener("click", function(event){
    event.preventDefault(); //отменяем обновление по умолчанию - форма не обновляет страницу
    let text = newTask.value;
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<span>${text}</span>
                    <i class="bi bi-pencil-fill btn-edit" tabindex="0"></i>
                    <i class="bi bi-trash-fill btn-remove" tabindex="0"></i>`;
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

//только срочные задачи
const btnEmergency = document.getElementById("btn-emergency");
btnEmergency.addEventListener("click", function(){
    let newTask = [...tasks];
    
})


















/*let btnsRemove = document.querySelectorAll(".btn-remove");

for (let btn of btnsRemove){
btn.addEventListener("click", () =>{
    console.log("remove")
})
}
*/
//удаление и редактирование задачи
container.addEventListener("click", (event)=>{
    let btn = event.target;
    //удаление
    if(btn.classList.contains("btn-remove")) {
        btn.closest(".task").outerHTML = "";
    }
    //редактирование
    if(btn.classList.contains("btn-edit")) {
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true");

        btn.closest(".task").outerHTML = querySelector("span").focus()

    }

})





//пример всплытия
/*let i = 0;
const tags = document.querySelectorAll("*");
for(let tag of tags) {
    tag.addEventListener("click", (event)=>{
        i++;
        console.log("этап " + i);
        console.log("целевой элемент:");
        console.log(event.target);
        console.log("элемент на котором сработало событие:");
        console.log(event.currentTarget);
    });

}*/
 




/*function myMax(){

    let max = arguments[0] || 0;
    for (let i = 1; i < arguments.length; i++)
    if(arguments[i] > max) {
        max = arguments[1];
    }
    return max;
}
console.log(myMax());*/






