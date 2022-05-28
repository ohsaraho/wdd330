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
    // if(todo.completed) {
    //     completeButton.innerText = '✔';
    //     todoContent.innerHTML = `<del>${todo.content}</del>`;
    // }

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
    console.log(todoList);

    todoList.forEach(todo => {
        const item = createTodoItem(todo);
        addToList(item);
        document.querySelector('#countTodos').innerHTML = `${todoList.length} tasks left`;
        // if (todoList.length >= 0) {
            
        //     document.querySelector('#countTodos').innerHTML = `${todoList.length} tasks left`;
        // } else if (!todoList.length) {
        //     document.querySelector('#countTodos').innerHTML = '0 tasks left';
        // }
        // if (e.currentTarget.id == 'activeFilter') {
        //     document.querySelector('#countTodos').innerHTML = todoList.length;
        // } else if (e.currentTarget.id == 'allFilter') {
        //     document.querySelector('#countTodos').innerHTML = todoList.length;
        // } else if (e.currentTarget.id == 'completedFilter') {
        //     document.querySelector('#countTodos').innerHTML = todoList.length;
        // }
        
    })
}

function deleteTodoList(event) {
    // document.querySelector('#todos').remove(event.id);
    // let todo = localStorage.getItem("todo");
    // todoArray = JSON.parse(todo);
    // ls.deleteTodoList(event);
    // const todoList = ls.getTodoList();

    // todoList.splice(event, 1);

    // ls.deleteTodoList(event);

    // const todoList = ls.getTodoList();

    // const deleteItem = todoList.splice(event);

    // ls.deleteTodoList(deleteItem);

    // loadTodos();

    // localStorage.removeItem(event.id);

    // document.querySelector('#todos').innerHTML = event.id;


    // const todoList = ls.getTodoList();

    // todoList.splice(event, 1);

    // ls.deleteTodoList(todoList);
    

    // let todoListString = localStorage.getItem('todoList');
    // let todoList = JSON.parse(todoListString);
    // todoList.splice(event, 1);
    // localStorage.setItem('todoList', JSON.stringify(todoList));
    const todoId = event.currentTarget.getAttribute('data-id');
    // debugger
    ls.deleteTodoList(todoId);
    loadTodos();

    // ls.deleteTodoList(todoList);

    // ls.deleteTodoList(event);

}

function completedList(e) {


    
    //  todo.completed = true; 
    //     completeButton.innerText = '✔';
    //     todoContent.innerHTML = `<del>${todo.content}</del>`;

    const id = e.currentTarget.getAttribute('data-id');
    const getList = ls.getTodoList();
    const listComplete = getList.find( todo => todo.id == id);
    listComplete.completed = !listComplete.completed;

    localStorage.setItem('todoList', JSON.stringify(getList));
    loadTodos();
    // debugger
    // if (listComplete == true)

    // let complete = listComplete.completed = true;

    // localStorage.setItem(TODO_LIST, JSON.stringify(complete));
    // loadTodos();
    // const getList = ls.getTodoList();
    // const listComplete = getList.find( todo => todo.id == id);

    // let complete = listComplete.completed = true;

    // localStorage.setItem(TODO_LIST, JSON.stringify(complete));
    // loadTodos();
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
        if (e.currentTarget.id == 'activeFilter') {
            document.querySelector('#countTodos').innerHTML = `${filteredTodos.length} active tasks`;
        } 
        else if (e.currentTarget.id == 'allFilter') {
            document.querySelector('#countTodos').innerHTML = `${filteredTodos.length} tasks left`;
        }
         else if (e.currentTarget.id == 'completedFilter') {
            document.querySelector('#countTodos').innerHTML = `${filteredTodos.length} completed tasks`;
        }
    });
}

function activeButton() {
    let buttons = document.querySelectorAll('.filterButton');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

