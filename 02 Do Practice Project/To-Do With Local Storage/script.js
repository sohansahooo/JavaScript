function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <button class="delete-btn" onclick="deleteTask(this)">delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}


function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Event listener for adding tasks with Enter key
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});