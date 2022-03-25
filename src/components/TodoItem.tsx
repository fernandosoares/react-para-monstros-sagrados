import React from "react";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface IProps {
  todo: ITodo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, deleteTodo, toggleComplete }: IProps) => {
  const handleComplete = () => {
    console.log(todo);
    toggleComplete(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="checkbox"
        onChange={handleComplete}
        checked={todo.completed ? true : false}
      />
      <p
        style={{
          // @ts-ignore
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.title}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
