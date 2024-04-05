import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todosActions";
import { v4 as uuidv4 } from "uuid";


const TodoInput = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        const newTodo = {
            id: uuidv4(),
            text: text,
            completed: false
        }

        dispatch(addTodo(newTodo));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="todo" 
            value={text} 
            placeholder="Create a new todo..." 
            onChange={(e) => {setText(e.target.value)}}
            className="input"
            />
            <button type="submit" className="button add-button">Add</button>
      </form>
    );
};

export default TodoInput;