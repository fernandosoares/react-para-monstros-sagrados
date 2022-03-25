import React, { ChangeEvent, useState } from "react";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface IFormProps {
  addTodo: (todo: ITodo) => void;
}

const Form = ({ addTodo }: IFormProps) => {
  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    completed: false,
  } as ITodo);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ ...todo, id: Math.ceil(Math.random() * 10000) });
    setTodo({ ...todo, title: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo.title} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default Form;
