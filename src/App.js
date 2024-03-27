import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, { text: todo, completed: false }]);
      setTodo('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => index !== todoIndex);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1> React Todo App </h1>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
