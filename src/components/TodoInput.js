const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div>
            <input 
            type="text" 
            name="todo" 
            value={todo} 
            placeholder="Create a new todo..." 
            onChange={(e) => {setTodo(e.target.value)}}
            className="input"
            />
            <button onClick={addTodo} className="button add-button">Add</button>
      </div>
    );
};

export default TodoInput;