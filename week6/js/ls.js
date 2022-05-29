const TODO_LIST = 'todoList';

function getTodoList() {
    let todoListString = localStorage.getItem(TODO_LIST);
    let todoList = [];

    if(todoListString) {
        todoList = JSON.parse(todoListString);
    }

    return todoList;
}

function saveTodoList(todo) {
    let todoList = getTodoList();

    todoList.push(todo);
    localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
}

function deleteTodoList(id) {
    // let todoListString = localStorage.getItem(TODO_LIST);
    // let todoList = JSON.parse(todoListString);
    // todoList.splice(event, 1);
    // localStorage.setItem(TODO_LIST, JSON.stringify(todoList));
    
    // debugger
    const todoList = getTodoList();
    let updateList = todoList.filter( todo => todo.id != id);

    localStorage.setItem(TODO_LIST, JSON.stringify(updateList));
    // console.log(updateList);
}

export default {
    saveTodoList,
    deleteTodoList,
    getTodoList
}