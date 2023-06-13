const taskEl = document.getElementById("tasks");
let tasks = [], deleteEl, delnum;

tasks = JSON.parse(localStorage.getItem("stored-tasks"));

function render() {
    if (tasks == null) {
        tasks = [];
    } else {
        let messages = "";
        for (let i = 0; i < tasks.length; i++) {
            messages += 
            `<div class="border-task" id="task-${i+1}">
                <p class="left" id="left-${i+1}">${tasks[i]}</p>
                <img class="right" id="right-${i+1}" src="cross.png" onclick="find_element(event)">
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

function find_element(event) {
    deleteEl = event.target
    let num = ((deleteEl.outerHTML).split(" ")[2]);
    console.log(num[10]);
    delnum = num[10];
    remove_task();
}

function remove_task() {
    tasks.splice(delnum-1, 1);
    localStorage.setItem("stored-tasks", JSON.stringify(tasks));
    render();
}

document.getElementById("add-btn").addEventListener("click", add_task);
