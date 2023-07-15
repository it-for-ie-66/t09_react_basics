import { useState, ChangeEvent } from "react";

interface Todo {
  id: number;
  title: string;
}

function T04() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: genId(), title: "Todo 1" },
    { id: genId(), title: "Todo 2" },
  ]);
  const [todoInput, setTodoInput] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function handleClick() {
    if (todoInput) {
      const newTodo: Todo = { id: genId(), title: todoInput };
      setTodos([...todos, newTodo]);
      setTodoInput("");
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          id="todo"
          onChange={handleChange}
          value={todoInput}
        />
        <button onClick={handleClick}>Add</button>
      </div>
      {/* {todos.map((todo) => {
        return <div key={todo.id}>{todo.title}</div>;
      })} */}

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}: {todo.title}
        </div>
      ))}
    </>
  );
}

export default T04;

function genId() {
  return Math.floor(Math.random() * 1000);
}
