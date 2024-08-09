import React from "react";
import { useState } from "react";

function ShoppingList2() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

    const example = ["mayo", "mustard", "car", "apple", "orange"];


  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }

  function handleDelete(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
  }

  return (
    <div>
      <h3>Shopping List</h3>
      <form>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add to Shopping List
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

export default ShoppingList2;

// input our todo list
// see our list
