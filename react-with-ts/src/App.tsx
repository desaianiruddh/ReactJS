import React, { useState } from 'react';

import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodoToList = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoText) {
      setTodoList([
        ...todoList,
        { id: Date.now(), todo: todoText, isDone: false },
      ]);
      setTodoText('');
    }
  };
  return (
    <div className="App">
      <div className="heading">Todo</div>
      <InputField
        todo={todoText}
        setTodo={setTodoText}
        addTodo={addTodoToList}
      />
      <TodoList todos={todoList} setTodos={setTodoList} />
    </div>
  );
};

export default App;
