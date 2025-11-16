for(let i = 0; i < taskText; i++) {
    taskList.appendChild(listItem);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));