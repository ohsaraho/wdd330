import utils from './utilities.js';
import ls from './ls.js';

// On click handler for button
document.querySelector('#addButton').onclick = addNewTodo;
document.querySelector('#allFilter').onclick = applyFilter;
document.querySelector('#activeFilter').onclick = applyFilter;
document.querySelector('#completedFilter').onclick = applyFilter;

document.innerText = activeButton();


// Gets the input
const input = document.querySelector('#todoInput');
// add input on enter 
input.addEventListener('keypress', e => {
    if (e.keyCode == '13') addNewTodo();
});
// todosCompleted();
loadTodos();

function addNewTodo(event) {
    const todo = { id: Date.now(), content: input.value, completed: false };

    // Resets the input field
    input.value = '';

    // Add to the UI
    createTodoItem(todo);
    // const todoItem = createTodoItem(todo);

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
    completeButton.onclick = completedList;
    completeButton.classList.add('complete-button');

    // ToDo content
    const todoContent = document.createElement('div');
    todoContent.innerText = todo.content;
    todoContent.classList.add('todo-content');
    
    if(todo.completed) {
        completeButton.innerText = '✔';
        // todoContent.innerHTML = `<del>${todo.content}</del>`;
        todoContent.classList.add('todo-content-strike');
    }

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('data-id', todo.id);
    deleteButton.innerText = 'X';
    deleteButton.onclick = deleteTodoList;
    deleteButton.classList.add('delete-button');

    
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
        todosCompleted();        
        
    })
}

function deleteTodoList(event) {

    const todoId = event.currentTarget.getAttribute('data-id');
    // debugger
    ls.deleteTodoList(todoId);
    todosCompleted();
    loadTodos();

}

function completedList(e) {

    const id = e.currentTarget.getAttribute('data-id');
    const getList = ls.getTodoList();
    const listComplete = getList.find( todo => todo.id == id);
    listComplete.completed = !listComplete.completed;

    localStorage.setItem('todoList', JSON.stringify(getList));
    loadTodos();
}

function applyFilter(e) {

    // Clear the list
    document.querySelector('#todos').innerHTML = '';
    // Declare the variables
    let filteredTodos = [];
    const allTodos = ls.getTodoList();

    // Check filter to apply
    if (e.currentTarget.id == 'activeFilter') {
        filteredTodos = utils.activeFilter(allTodos);
    } else if (e.currentTarget.id == 'allFilter') {
        filteredTodos = allTodos;
    } else if (e.currentTarget.id == 'completedFilter') {
        filteredTodos = utils.completedFilter(allTodos);
    }

    // Draws the list
    filteredTodos.forEach( todo =>{
        const item = createTodoItem(todo);
        addToList(item);
        // if (e.currentTarget.id == 'activeFilter') {
        //     document.querySelector('#countTodos').innerHTML = `${filteredTodos.length} active tasks`;
        // } 
        // else if (e.currentTarget.id == 'allFilter') {
        //     let counting = todosUncompleted()
        //     document.querySelector('#countTodos').innerHTML = `${counting} tasks left`;
        // }
        //  else if (e.currentTarget.id == 'completedFilter') {
        //     document.querySelector('#countTodos').innerHTML = `${filteredTodos.length} completed tasks`;
        // }
    });
}

function activeButton() {
    let buttons = document.querySelectorAll('.filterButton');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // if (loadTodos() == true) {
            //     document.querySelector('active filterButton').classList.add('active');
            // } else {
            //     this.classList.add('active');
            // }
        });
    });
}

function todosCompleted() {
        // let numremaining = todosUncompleted();
        // document.querySelector('#countTodos').innerHTML = `<span>${numremaining} task${numremaining > 1 ? 's' : ""} remaining</span>`;
        let todosRemaining = todosUncompleted();
        if (todosRemaining > 1 || todosRemaining == 0) {
            document.querySelector('#countTodos').innerHTML = `${todosRemaining} tasks left`;
        } 
        else if (todosRemaining == 1) {
            document.querySelector('#countTodos').innerHTML = `${todosRemaining} task left`;
        }
    
}

function todosUncompleted() {
    let count = 0;
    const todoList = ls.getTodoList();
    todoList.forEach(c => {
        count += c.completed ? 0 : 1
    });
    // debugger
    // console.log(count);
    return count;
    
}

