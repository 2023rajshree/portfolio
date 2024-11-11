import React, { useState } from 'react';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const add = () => {
    if (todo.trim()) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }
  };

  const deleteTodo=(index) =>{
    setTodoList(todoList.filter((item,i)=> i!=index));
    }
  return (
    <>
      <div>To-do List</div>
      <input
        type='text'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className='add_button' onClick={add}>+</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
