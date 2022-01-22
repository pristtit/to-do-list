const addTaskBtn = document.getElementById('add-task-btn');
const deskTaskInput = document.getElementById('description-task');
const todosWraper = document.querySelector('.todos-wraper')

let tasks = [];

function Task(description) {
	this.description = description;
	this.completed = false;
}

addTaskBtn.addEventListener('click', () => {
	tasks.push(new Task(deskTaskInput.value));
	console.log(tasks)
})