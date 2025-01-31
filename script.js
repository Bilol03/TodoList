const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.querySelector("ul");
let tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
createEl(tasks)
function createEl(tasks) {
    taskList.innerHTML = ""
    for(let task of tasks) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = task; 
        const deleteButton = document.createElement("button");
        // deleteButton.className = "delete_btn"
        deleteButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
        `;
        li.appendChild(p);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        deleteButton.addEventListener("click", function (event) {
            let p = event.target.closest('li').querySelector('p')
            
            tasks = tasks.filter(el => el != p.textContent)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            createEl(tasks)
            
        });
    }
    
}



addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText === ""){ alert("Vazifani kiriting!"); return;}

    tasks.push(taskText)
    console.log(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks))
    createEl(tasks)

    taskInput.value = "";
});



taskInput.addEventListener("click", function (event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});