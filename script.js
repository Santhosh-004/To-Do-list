const taskEl = document.getElementById("tasks");
let tasks = [];

tasks = JSON.parse(localStorage.getItem("stored-tasks"));

function render() {
    if (tasks == null) {
        tasks = [];
    } else {
        let messages = "";
        for (let i = 0; i < tasks.length; i++) {
            messages += 
            `<div class="border-task">
                <p class="left">${tasks[i]}</p>
                <img class="right" src="cross.png">
            </div>`;
        }
        taskEl.innerHTML = messages;
    }
}

render();

function add_task() {
    let e_task = document.getElementById("task-inp");
    console.log(e_task.value);
    tasks.push(e_task.value);
    e_task.value = "";
    localStorage.setItem("stored-tasks", JSON.stringify(tasks));
    console.log("stored", JSON.parse(localStorage.getItem("stored-tasks")));
    render();
}

function remove_task() {
    
}

document.getElementById("add-btn").addEventListener("click", add_task);