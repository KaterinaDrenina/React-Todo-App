export const addTodo = id => ({
    type: 'ADD_TODO',
    payload: id
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    payload: id
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    payload: id
});