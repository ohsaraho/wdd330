function activeFilter(todos) {
    return todos.filter( todo => {
        return !todo.completed;
        // if(!todo.completed){
            
        //     return true;
        // } 
        
    });
}

function completedFilter(todos) {
    return todos.filter( todo => {
        return todo.completed; 

        // if(todo.completed){
            
        //     return true;
        // }

    });
}
export default {
    activeFilter,
    completedFilter
}