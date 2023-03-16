// Initialize empty task array
let taskArray = [];

// Get form elements
const addTaskForm = document.getElementById('addTaskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskPrioritySelect = document.getElementById('taskPriority');
const taskStatusRadioPending = document.getElementById('taskStatusPending');
const taskStatusRadioCompleted = document.getElementById('taskStatusCompleted');

// Get task list element
const taskList = document.getElementById('taskList');

// Function to render task list
function renderTaskList() {
	// Clear existing task list
	taskList.innerHTML = '';

	// Loop through tasks in task array and append to task list
	for (let i = 0; i < taskArray.length; i++) {
		// Create task item element
		const taskItem = document.createElement('li');
		taskItem.classList.add('list-group-item', '
