document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task__input");
    const taskForm = document.getElementById("tasks__form");
    const taskList = document.getElementById("tasks__list");

    taskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const task = document.createElement("div");
            task.className= "task";

            const title = document.createElement("div");
            title.className ="task__title";
            title.textContent = taskText;

            const removeBtn = document.createElement("a");
            removeBtn.href = "#";
            removeBtn.className ="task__remove";
            removeBtn.textContent = "x";

            removeBtn.addEventListener("click", function (e) {
                e.preventDefault();
                task.remove();
            });

            task.appendChild(title);
            task.appendChild(removeBtn);
            taskList.appendChild(task);

            taskInput.value = "";
        }
    });
});