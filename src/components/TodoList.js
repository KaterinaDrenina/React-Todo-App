const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
      <>
        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <div className={`todo ${todo.completed ? "completed" : ""}`} key={index}>
                <li onClick={() => toggleTodo(index)}>{todo.text}</li>
                <button onClick={() => deleteTodo(index)} className="button delete-button">Delete</button>
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
  