import utilities from './utilities.js';
import ls from './ls.js';

// On click handler for button
document.querySelector('#addButton').onclick = addNewTodo;
// Gets the input
const input = document.querySelector('#todoInput');
// add input on enter 
input.addEventListener('keypress', event => {
    if(event.keyCode == '13') addNewTodo;
})

loadTodos();

function addNewTodo(event) {
    const todo = { id: Date.now(), content: input.value, completed: false };

    // Resets the input field
    input.value = '';

    // Add to the
    const todoItem = createTodoItem(todo);

    // Saves to localStorage
    ls.saveTodoList(todo);

    loadTodos();
}

// Creates all the list items dynamiclly
function createTodoItem(todo) {
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Complete Button
    const completeButton = document.createElement('button');
    completeButton.setAttribute('data-id', todo.id);
    completeButton.classList.add('complete-button');

    // ToDo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', todo.id);
    deleteButton.innerText = 'X';
    deleteButton.onclick = deleteTodoList;

    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(todoContent);
    todoDiv.appendChild(deleteButton);

    return todoDiv;

}

function addToList(todoDiv) {
    document.querySelector('#todos').appendChild(todoDiv);
}

function loadTodos() {
    // Grabs the list and clears it out so it doesn't duplicate the list
    document.querySelector('#todos').innerHTML = '';
    // Grabs the new ToDo list array
    const todoList = ls.getTodoList();

    // Debugging
    // console.log(todoList);

    todoList.forEach(todo => {
        const item = createTodoItem(todo);
        addToList(item);
    })
}

function deleteTodoList(event) {

}