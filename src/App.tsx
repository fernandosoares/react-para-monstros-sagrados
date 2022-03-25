import React, { useEffect, useState } from "react";
import Elemento from "./components/Elemento";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./contexts/TodoProvider";

const LOCAL_STORAGE_KEY = "todos-list";
interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState([] as ITodo[]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "");
    if (items) {
      setTodos(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: ITodo) => {
    setTodos([todo, ...todos]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo</h1>
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />

      <TodoProvider>
        <Elemento />
      </TodoProvider>
    </>
  );
};

export default App;
