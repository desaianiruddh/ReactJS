import React, { useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

import { Todo } from '../model';
import './style.css';

interface props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoCard: React.FC<props> = ({ todo, todos, setTodos }) => {
  const [editTodo, setEditTodo] = useState<boolean>(false);
  const [todoText, setTodoText] = useState<string>(todo.todo);
  const handleComlpeted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e:React.FormEvent,id:number) => {
    e.preventDefault();
    setTodos(
      todos.map(todo=>todo.id===id?{...todo,todo:todoText}:todo)
    )
    setEditTodo(false)
  }
  return (
    <form className="card-container" onSubmit={(e)=>handleEdit(e,todo.id)}>
      {editTodo ? (
        <input
          value={todoText}
          onChange={({ target: { value } }) => setTodoText(value)}
          className='todo-text'
        />
      ) : todo.isDone ? (
        <s className="todo-text">{todo.todo}</s>
      ) : (
        <span className="todo-text">{todo.todo}</span>
      )}
      {}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!editTodo && !todo.isDone) {
              setEditTodo(true);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleComlpeted(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
