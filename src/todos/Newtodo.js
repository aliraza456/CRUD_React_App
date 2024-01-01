import React, { useState } from 'react';
import './Newtodo.css'; // Import the CSS file

const Newtodo = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);

  const handleItem = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    if (inputValue === '') return;
    if (isEditing) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === editTodoId) {
            return { ...todo, text: inputValue };
          }
          return todo;
        })
      );
      setIsEditing(false);
      setEditTodoId(null);
    } else {
      const newTodos = {
        id: Date.now(),
        text: inputValue,
      };
      setTodos([...todos, newTodos]);
    }
    setInputValue('');
  };

  const removeItem = (id) => {
    const updatedItem = todos.filter((todo) => todo.id !== id);
    setTodos(updatedItem);
  };

  const editItem = (todo) => {
    setIsEditing(true);
    setEditTodoId(todo.id);
    setInputValue(todo.text);
  };

  return (
    <div className="todo-container">
    <h1 className="todo-header">Todo list</h1>
    <div className="input-group">
      <input 
        type='text' 
        className="todo-input" 
        onChange={handleItem} 
        value={inputValue} 
      />
      <button 
        className="add-btn" 
        onClick={addItem}
      >
        Add Item
      </button>
    </div>
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <button 
              className="remove-btn" 
              onClick={() => removeItem(todo.id)}
            >
              Remove
            </button>
            <button 
              className="edit-btn" 
              onClick={() => editItem(todo)}
            >
              Edit
            </button>
          </li>
        )
      })}
    </ul>
  </div>
  );
};

export default Newtodo;
