document.addEventListener('DOMContentLoaded', function() {

    function loadTasks() {
    
    // Get the stored string (use the correct key: 'tasks')
    let stringListItems = localStorage.getItem('tasks');

    // Check if something exists in localStorage
    if (stringListItems) {

        // Convert JSON string → array
        let objectList = JSON.parse(stringListItems);

        // Create a div (your original idea)
        const newDiv = document.createElement('div');

        // Show the list in the div (simple display)
        newDiv.innerHTML = objectList.join(', ');

        document.body.appendChild(newDiv);
    }
    }




    
const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // task creation and removal
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // remove task when button is clicked
    removeButton.onclick = () => {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';

    //save tasks to Local Storage whenever a new task is added
    const tasks = [];
    taskList.querySelectorAll('li').forEach(item => {
        tasks.push(item.firstChild.textContent);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// event listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
})
});

    document.addEventListener('DOMContentLoaded', addTask);

        

