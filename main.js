const appContainer = document.querySelector('#app-container')
const addTaskInput = document.querySelector('#add-task-input')
const btn = document.querySelector('#btn')
const searchInput = document.querySelector('#search-input')
const tasks = document.querySelector('#tasks')

btn.addEventListener('click', function() {
	if (addTaskInput.value !== '') {
		const task = document.createElement('div')
		task.classList.add('task-box')
		const p = document.createElement('p')
		p.textContent = `${addTaskInput.value}`
		task.appendChild(p)
		const deleteBtn = document.createElement('img')
		deleteBtn.classList.add('delete-btn')
		deleteBtn.src = 'img/delete.svg'
		deleteBtn.addEventListener('click', function() {
			task.classList.add('hide')
		})
		task.appendChild(deleteBtn)
		tasks.appendChild(task)
		addTaskInput.value = ''
	}
})
