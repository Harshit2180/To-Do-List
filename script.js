const InputTask = document.querySelector("#inputText");
const button = document.querySelector(".btn");
const AllTasks = document.querySelector(".TaskItems");

const SaveData = () => {
    localStorage.setItem("data", AllTasks.innerHTML);
}

const AddTask = () => {
    if (InputTask.value === ''){
        alert("Enter a Task");
    }
    else {
        let NewTask = document.createElement("li");
        NewTask.innerText = InputTask.value;
        AllTasks.append(NewTask);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        NewTask.append(span);
    }

    InputTask.value = "";
    SaveData();
}

button.addEventListener("click", AddTask);

InputTask.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        AddTask();
    }
});

AllTasks.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData();
    }
})

const GetData = () => {
    AllTasks.innerHTML = localStorage.getItem("data");
}

GetData();