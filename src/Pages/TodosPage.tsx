import React from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from "../components/interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    // setTodos([newTodo, ...todos])
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shoudRemove = confirm("Do u want to delete this stuff?");
    if (shoudRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <React.Fragment>
      <TodoForm onAdd={addHandler} />

      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </React.Fragment>
  );
};
