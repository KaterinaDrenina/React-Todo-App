import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from '../actions/todosActions';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  
  return (
    <>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <div className={`todo ${todo.completed ? "completed" : ""}`} key={todo.id}>
              <li onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</li>
              <button onClick={() => dispatch(deleteTodo(todo.id))} className="button delete-button">Delete</button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No tasks found...</p>
        </div>
      )}
    </>
  );
};
  
export default TodoList;
  