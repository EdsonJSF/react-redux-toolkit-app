import { useGetTodosQuery } from "../store/apis/todosApi";

export const TodoApp = () => {
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>TodoApp - RTK Query</h1>
      <hr />
      {isLoading ? (
        <h4>Loading ... </h4>
      ) : (
        <>
          <ul>
            {todos.map(({ id, title, completed }) => (
              <li key={id}>
                <strong> {completed ? "completed" : "incompleted"} </strong>
                {title}
              </li>
            ))}
          </ul>

          <button>Next todo</button>
        </>
      )}
    </>
  );
};
