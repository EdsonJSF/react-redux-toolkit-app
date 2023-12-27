import { useState } from "react";
import { useGetTodoByIDQuery, useGetTodosQuery } from "../store/apis/todosApi";

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);

  const { data: todos = [], isLoading: isLoadingTodos } = useGetTodosQuery();
  const { data: todo = [], isLoading: isLoadingTodo } =
    useGetTodoByIDQuery(todoId);

  const handleTodoId = (todoPosition) => {
    setTodoId((currentTodo) => currentTodo + todoPosition);
  };

  return (
    <>
      <h1>TodoApp - RTK Query</h1>
      <hr />

      {isLoadingTodo ? (
        <h4>Loading Todo ...</h4>
      ) : (
        <>
          <pre>{JSON.stringify(todo)}</pre>
          <button disabled={todoId <= 1} onClick={() => handleTodoId(-1)}>
            Prev todo
          </button>
          <button onClick={() => handleTodoId(1)}>Next todo</button>
        </>
      )}

      {isLoadingTodos ? (
        <h4>Loading Todos ...</h4>
      ) : (
        <ul>
          {todos.map(({ id, title, completed }) => (
            <li key={id}>
              <strong> {completed ? "completed" : "incompleted"} </strong>
              {title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
