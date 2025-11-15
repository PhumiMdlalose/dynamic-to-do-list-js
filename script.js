document.addEventListener('DOMContentLoaded', function() {

    document.addEventListener('DOMContentLoaded', () => {
    
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

});


    
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
 
 /*let stringListItems = localStorage.getItem('taskList');
    if (stringListItems.listItem >= 1) {
        let objectList = JSON.parse(stringListItems);
        const newDiv = document.createElement('div');
        newDiv.innerHTML = objectList;
        document.body.appendChild(newDiv);
    }*/

        

