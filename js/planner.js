// 1. Select DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('planner-task-list');

// 2. Initial Sample Data (Update statuses to false)
let initialTasks = [
    { text: "Review MIVA Network Defense Syllabus", completed: false },
    { text: "Render lower-thirds graphics for video portfolio project", completed: false },
    { text: "Practice packet analysis scripts on Linux terminal", completed: false },
    { text: "Complete Lab assignments for COS 102", completed: false },
    { text: "Complete Lab assignments for COS 106", completed: false }
];

// 3. Render Function to draw tasks to the page screen
function renderTasks() {
    taskList.innerHTML = ''; // Wipe current list to avoid duplicate rendering bubbles
    
    initialTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        // Add completion click toggle onto the text body layer
        const textSpan = document.createElement('span');
        textSpan.className = "task-text";
        textSpan.textContent = task.text;
        textSpan.addEventListener('click', () => toggleTask(index));
        
        // Create Delete Button Component
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-task-btn';
        deleteBtn.innerHTML = '✕';
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents completion trigger when hitting delete
            deleteTask(index);
        });
        
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// 4. Feature Rule: Add a Task
function addTask() {
    const textValue = taskInput.value.trim();
    if (textValue === '') return; // Block empty inputs safely
    
    initialTasks.push({ text: textValue, completed: false });
    taskInput.value = ''; // Reset input field empty
    renderTasks();
}

// 5. Feature Rule: Toggle Task Completed
function toggleTask(index) {
    initialTasks[index].completed = !initialTasks[index].completed;
    renderTasks();
}

// 6. Feature Rule: Delete a Task
function deleteTask(index) {
    initialTasks.splice(index, 1);
    renderTasks();
}

// 7. Event Binding Handlers
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Run immediate render initialization pass
renderTasks();