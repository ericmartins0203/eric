function TodoList({ list, handleTodo }) {
  const styleX = {
    color: "red",
    fontWeight: 700,
  };
  return (
    <ul>
      {list.map((element, index) => (
        <li key={index}>
          {element}
          <button style={styleX} onClick={() => handleTodo(element)}>
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
