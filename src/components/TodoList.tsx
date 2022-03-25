import React from "react";
import TodoItem from "./TodoItem";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface IProps {
  todos: ITodo[];
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList = ({ todos, toggleComplete, deleteTodo }: IProps) => {
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </>
  );
};

export default TodoList;
