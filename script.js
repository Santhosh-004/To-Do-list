const taskEl = document.getElementById("tasks");
let tasks = [], deleteEl, delnum, complete=[];

//localStorage.clear();
tasks = JSON.parse(localStorage.getItem("stored-tasks"));
complete = JSON.parse(localStorage.getItem("completed"));

function render() {
    if (tasks == null || tasks.length == 0) {
        tasks = [];
        complete = [];
        taskEl.innerHTML = "";
    } else {
        let messages = "";
        for (let i = 0; i < tasks.length; i++) {
            messages += 
            `<div class="border-task" id="task-${i+1}">
                <p class="left" id="left-${i+1}" onclick="find_element(event, 0)">${tasks[i]}</p>
                <img class="right" id="right-${i+1}" src="cross.png" onclick="find_element(event, 1)">
            </div>`;
        }
        taskEl.innerHTML = messages;
        console.log(tasks);
        console.log(complete);
        for (let i=0; i<complete.length; i++) {
            if (complete[i] == true) {
                document.getElementById(`task-${i+1}`).style.backgroundColor = "green";
            } else {
                document.getElementById(`task-${i+1}`).style.backgroundColor = "rgb(24, 24, 35)";
            }
        }
    }
}

render();

function add_task() {
    let e_task = document.getElementById("task-inp");
    console.log(e_task.value);
    tasks.push(e_task.value);
    complete.push(false);
    e_task.value = "";
    localStorage.setItem("stored-tasks", JSON.stringify(tasks));
    localStorage.setItem("completed", JSON.stringify(complete));
    console.log("stored", JSON.parse(localStorage.getItem("stored-tasks")));
    console.log("completed", JSON.parse(localStorage.getItem("completed")));
    render();
}

function find_element(event, remove) {
    deleteEl = event.target
    console.log("event target :", deleteEl.id);
    let num = ((deleteEl.id).split("-"))[1];
    num = num.split(",")[0];
    if (remove) {
        num = ((deleteEl.id).split("-"))[1];
        console.log("num in remove", num);
        remove_task(num);
    } else {
        
        let new_mess = `task-${num}`;
        console.log("num in color", num);

        if (document.getElementById(new_mess).style.backgroundColor === "rgb(24, 24, 35)") {
            document.getElementById(new_mess).style.backgroundColor = "green";
            complete[num-1] = true;
            console.log(num-1, complete);
            localStorage.setItem("completed", JSON.stringify(complete));
        } else {
            document.getElementById(new_mess).style.backgroundColor = "rgb(24, 24, 35)";
            complete[num-1] = false;
            console.log(num-1, complete);
            localStorage.setItem("completed", JSON.stringify(complete));
        }

    }
}

function remove_task(num) {
    console.log("num is rem function :", num);
    tasks.splice(num-1, 1);
    complete.splice(num-1, 1);
    localStorage.setItem("stored-tasks", JSON.stringify(tasks));
    localStorage.setItem("completed", JSON.stringify(complete));
    console.log("rem-stored", JSON.parse(localStorage.getItem("stored-tasks")));
    console.log("rem-completed", JSON.parse(localStorage.getItem("completed")));
    render();
}

document.getElementById("add-btn").addEventListener("click", add_task);
