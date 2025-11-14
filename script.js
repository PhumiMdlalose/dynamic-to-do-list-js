document.addEventListener('DOMContentLoaded', function() {

    //select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //create the task function
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText == '') {
            alert('Please enter a task.');
            return;
        }

        //task creation and removal
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button class="remove-btn"');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
            removeButton.appendChild(listItem);
            taskInput.value = '';
        })

        //attach event listeners
        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }
    document.addEventListener('DOMContentLoaded', addTask);

})