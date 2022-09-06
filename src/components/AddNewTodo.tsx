import React, { useRef } from "react";

type NewTodoProps = {
    onAddTodo: (todoText: string) => void
}

const AddNewTodo: React.FC<NewTodoProps> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredTodo = todoInputRef.current!.value;
        console.log(enteredTodo);

        props.onAddTodo(enteredTodo);
    }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo">Input Todo: </label>
        <input type="text" id="todo" ref={todoInputRef} />
        <button>Add Todo</button>
      </div>
    </form>
  );
};

export default AddNewTodo;
