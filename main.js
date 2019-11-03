const appContainer = document.querySelector('#app-container')
const addTaskInput = document.querySelector('#add-task-input')
const btn = document.querySelector('#btn')
const searchInput = document.querySelector('#search-input')
const tasks = document.querySelector('#tasks')

const task = document.createElement('div')
task.classList.add('item-size')
const p = document.createElement('p')
task.appendChild(p)

btn.addEventListener('click', function() {
	p.textContent = `${addTaskInput.value}`
	tasks.appendChild(task)
})
