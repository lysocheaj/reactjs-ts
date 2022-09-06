import React, { useState } from 'react';

import AddNewTodo from "./components/AddNewTodo";
import TodoList from "./components/TodoList";
import { Todo } from './components/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos([{id: Math.random.toString(), text: text}]);
  }

  return (
    <div className="App">
      <AddNewTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
