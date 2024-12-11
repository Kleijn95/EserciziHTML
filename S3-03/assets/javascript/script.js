const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');




function addTask() {
    const taskText = taskInput.value.trim();
    console.log(taskInput.value)
    if (taskText === '') {
        alert('Inserisci un task!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.classList.add('task-item');


    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;


    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');


    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completa';
    completeButton.classList.add('complete-btn');
    completeButton.addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Elimina';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(deleteButton);

    listItem.appendChild(taskContent);
    listItem.appendChild(taskButtons);

    taskList.appendChild(listItem);
    taskInput.value = '';
}


addTaskButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
