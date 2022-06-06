import React, { useRef } from 'react';

import './style.css';

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        addTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="text"
        name="todoText"
        placeholder="Add Task"
        className="input-todo"
        value={todo}
        onChange={({ target: { value } }) => setTodo(value)}
      />
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
};

export default InputField;
