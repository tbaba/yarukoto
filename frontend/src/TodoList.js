import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3000/todos');
      setTodos(result.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="todo-list">
        {todos.map(todo => {
          return (
            <div className="todo" id={`todo-{todo.id}`} key={`todo-{todo.id}`}>
              {todo.title}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
