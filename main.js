/*const allboxes = document.querySelectorAll('.boxes')
const allTaskes = document.querySelectorAll('.task')
/*const todobox = document.querySelector('#do')
allTaskes.forEach(task => {
    task.addEventListener('dragstart', () => {
        task.classList.add('is-dragging')
    })
    task.addEventListener('dragend', () => {
        task.classList.remove('is-dragging')
    })
})
allboxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();


        const curtask = document.querySelector('.is-dragging')
        box.appendChild(curtask)
    })
})
const form = document.querySelector('#add')
const input = document.querySelector('#todo-input')
const todobox = document.querySelector('#do')
form.addEventListener('submit', e => {
    e.preventDefault();
    const newtask = input.value;
    if (!newtask) return;
    const neww = document.createElement('p')
    neww.classList.add('task')
    neww.setAttribute('draggable', 'true')
    neww.innerHTML = newtask
    neww.addEventListener('dragstart', () => {
        task.classList.add('is-dragging')
    })
    neww.addEventListener('dragend', () => {
        neww.classList.remove('is-dragging')
    })
    todobox.appendChild(neww)
    input.value = '';

})
*/
/*
let input=document.querySelector(".input");
let submit=document.querySelector(".add");
let taskdiv=document.querySelector(".taskes");

let arrayOfTaskes=[];
if(localStorage.getItem("tasks")){
    arrayOfTaskes=JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorage();
submit.onclick=function(){
    if (input.value !==""){
        addTaskToArray(input.value);
        input.value="";

    }

}
taskdiv.addEventListener("click",(e)=>{
    if(e.target.classlist.contains("del")){
        e.target.parentElement.remove();
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    }
})
function addTaskToArray(taskText){
    const task={
        id:Date.now(),
        title:taskText,
        completed:false,
    };

arrayOfTaskes.push(task);
addElementsToPageFrom(arrayOfTaskes);
addDataToLocalStorageFrom(arrayOfTaskes);
}
function addElementsToPageFrom(arrayOfTaskes){
    taskdiv.innerHTML="";
    arrayOfTaskes.forEach(task => {
        let div=document.createElement("div");
        div.className="task";
        if(task.completed){
            div.className="task done";
        }
        div.setAttribute("data-id",task.id);
        div.appendChild(document.createTextNode(text.title));
        let span=document.createElement("span");
        span.className="del";
        span.className=appendChild(document.createTextNode("Delete"));
        div.appendChild(span);
        taskdiv.appendChild(div);
        
    });
}
function addDataToLocalStorageFrom(arrayOfTaskes){
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTaskes));
}
function getDataFromLocalStorage(){
    let data=window.localStorage.getItem("tasks");
    if(data){
        let tasks=JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}
function deleteTaskWith(taskId){
    arrayOfTaskes=arrayOfTaskes.filter((task)=>task.id !=taskId)
    addDataToLocalStorageFrom(arrayOfTaskes);
    }
*/
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value); // Add Task To Array Of Tasks
        input.value = ""; // Empty Input Field
    }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
    // Delete Button
    if (e.target.classList.contains("del")) {
        // Remove Task From Local Storage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        // Remove Element From Page
        e.target.parentElement.remove();
    }
    // Task Element
    if (e.target.classList.contains("task")) {
        // Toggle Completed For The Task
        toggleStatusTaskWith(e.target.getAttribute("data-id"));
        // Toggle Done Class
        e.target.classList.toggle("done");
    }
});

function addTaskToArray(taskText) {
    // Task Data
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false,
    };
    // Push Task To Array Of Tasks
    arrayOfTasks.push(task);
    // Add Tasks To Page
    addElementsToPageFrom(arrayOfTasks);
    // Add Tasks To Local Storage
    addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
    // Empty Tasks Div
    tasksDiv.innerHTML = "";
    // Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
        // Create Main Div
        let div = document.createElement("div");
        div.className = "task";
        // Check If Task is Done
        if (task.completed) {
            div.className = "task done";
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Create Delete Button
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("X"));
        // Append Button To Main Div
        div.appendChild(span);
        // Add Task Div To Tasks Container
        tasksDiv.appendChild(div);
    });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPageFrom(tasks);
    }
}

function deleteTaskWith(taskId) {
    // For Explain Only
    // for (let i = 0; i < arrayOfTasks.length; i++) {
    //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
    // }
    arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
    addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
    for (let i = 0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
            //  taskId.innerHTML.
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks);
}