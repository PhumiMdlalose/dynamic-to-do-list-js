document.addEventListener('DOMContentLoaded', function() {

    /*select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //create the task function
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText == '') {
            alert('Please enter a task.');
            return;
        }

        task creation and removal
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            taskList.removeChild(listItem);
            removeButton.appendChild(listItem);
            taskInput.value = '';
        })

        attach event listeners
        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        })*/

        // Create the task function
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

 // Initialize the load task:
 
 let stringListItems = localStorage.getItem('taskList');
    if (stringListItems.listItem >= 1) {
        let objectList = JSON.parse(stringListItems);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = objectList;
        document.body.appendChild(newDiv);
    }

