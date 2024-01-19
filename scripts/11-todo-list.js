// initiate variable
const todoList = [
	{
		name: 'lube a switch',
		dueDate: '2024-01-9',
	},
	{
		name: 'Build keyboard',
		dueDate: '2024-01-14',
	},
];

renderTodoList(); // call function to display todo list on the page
// function to display something on the page
function renderTodoList() {
	let todoListHTML = '';

	// this technique below is called Generating the HTML
	for (let i = 0; i < todoList.length; i++) {
		const todoObject = todoList[i];
		// const name = todoObject.name;
		// const dueDate = todoObject.dueDate;
		const { name, dueDate } = todoObject; // <- destructuring object
		const html = `
		<div>${name}</div>
		<div>${dueDate}</div>
		<button onclick="
		todoList.splice(${i}, 1);
		renderTodoList();
		" class="delete-todo-button"{>Delete</button>
		`;
		todoListHTML += html;
	}

	document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
// add todo function
function addTodo() {
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;

	const dateInputElement = document.querySelector('.js-due-date-input');
	// get due date out of the element
	const dueDate = dateInputElement.value;

	// to push to an array
	todoList.push({
		// name: name,
		// dueDate: dueDate,
		name, // <- thi is shorthand property syntax for object
		dueDate,
	});

	inputElement.value = '';

	renderTodoList(); // every time we adding addTodo we are gonna display the list again.
}
