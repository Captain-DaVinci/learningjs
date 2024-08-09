import React from "react";
import { useState } from "react";

function ShoppingList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function handleDelete(index) {
    //     let index = todos.findIndex((x) => x === todo);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(index);
  }
      
      
      
  return (
    <div>
      <h1>Shopping List List</h1>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
