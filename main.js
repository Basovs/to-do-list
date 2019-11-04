const appContainer = document.querySelector('#app-container')
const addTaskInput = document.querySelector('#add-task-input')
const btn = document.querySelector('#btn')
const searchInput = document.querySelector('#search-input')
const tasks = document.querySelector('#tasks')

function renderTask(taskValue) {
	const task = document.createElement('div')
	task.classList.add('task-box')
	const p = document.createElement('p')
	p.textContent = `${taskValue}`
	task.appendChild(p)
	const deleteBtn = document.createElement('img')
	deleteBtn.classList.add('delete-btn')
	deleteBtn.src = 'img/delete.svg'
	deleteBtn.addEventListener('click', function() {
		task.remove()
	})
	task.appendChild(deleteBtn)
	tasks.appendChild(task)
}

//Adds new task when btn is clicked
btn.addEventListener('click', function() {
	if (addTaskInput.value !== '') {
		renderTask(addTaskInput.value)
		addTaskInput.value = ''
	}
})

//Draws a new task list
function renderTaskList(arr) {
	arr.forEach(element => {
		element.parentElement.classList.remove('hide')
	})
}

//On input in search field refresh the task list
searchInput.addEventListener('input', function() {
	const searchFor = event.currentTarget.value.toLowerCase()
	const allTasks = Array.from(document.querySelectorAll('p'))
	const filteredTasks = allTasks.filter(function(element) {
		element.parentElement.classList.add('hide')
		return element.textContent.toLowerCase().includes(searchFor)
	})

	renderTaskList(filteredTasks)
})
