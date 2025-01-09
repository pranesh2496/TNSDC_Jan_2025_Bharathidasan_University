const inputEl = document.querySelector("#input");
const buttonEl = document.querySelector("#delete");
const outputEl = document.querySelector("#list-container");
const form = document.querySelector("form");

// add task
// localStorage.setItem("firstname","Pranesh");

// get item
// const result = localStorage.getItem("firstname");
// console.log(result);

// remove item
// localStorage.removeItem("firstname");

// add tasks and save into local storage

//Delete task

const removeTask = id =>{
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
  } else{
    tasks = JSON.parse(localStorage.getItem("tasks",tasks));
  }
  tasks = tasks.filter(task =>{
    return task.id !== +id;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
};

//get item
const getTasks = () =>{
  let tasks;
  if(localStorage.getItem("tasks") === null){
    tasks = [];
    console.log(tasks);
  } else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  //Display to DOM
  let output;
  const allTasks = tasks.map(task =>{
    return `<li id="item">
    <span>${task.title}</span>
    <button onclick ="removeTask('${task.id}')" 
    id="delete">X</button>
  </li>
    `;
  });
    output = allTasks.join("");
    outputEl.innerHTML = output;
};
getTasks();

// Add Task and save into localstorage
const addTask = e =>{
  e.preventDefault();
  // check if input is empty
  if(inputEl.value === ""){
    alert("Please enter a task");
  }
  // get the item
  const task = inputEl.value;
  if(task){
    let tasks;
    if(localStorage.getItem("tasks") === null){
      tasks = [];
      console.log(tasks);
    }else{
      tasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(tasks);
    }
    tasks.unshift({
      id: Date.now(),
      title: task,
    });
    // save to storage
    localStorage.setItem("tasks",JSON.stringify(tasks));
    // empty input
    inputEl.value = "";
  }
  getTasks();
}

form.addEventListener("submit",addTask);