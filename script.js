const taskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.querySelector("ul");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText === ""){ alert("Vazifani kiriting!"); return;}

    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = taskText;



    li.appendChild(p);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
});

taskInput.addEventListener("click", function (event) {
    if (event.key === "Enter") {
        addTaskButton.click();
    }
});