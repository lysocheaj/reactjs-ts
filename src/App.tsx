import React, { useState } from "react";

import AddNewTodo from "./components/AddNewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./components/todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodo) => [
      ...prevTodo,
      { id: Math.random.toString(), text: text },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <AddNewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
