import { useState } from "react";
import "./App.css";
import Form from "./components/Form/index";
import TodoList from "./components/TodoList/index";

function App() {
  const [list, setList] = useState([]);

  function addTodo(newTodo) {
    if (list.includes(newTodo)) {
      return;
    }
    setList([...list, newTodo]);
  }

  function handleTodo(removed) {
    const filterList = list.filter((element) => element !== removed);
    setList(filterList);
  }

  return (
    <div className="App">
      <div className="folder">
        <Form addTodo={addTodo}></Form>
        <TodoList list={list} handleTodo={handleTodo} />
      </div>
    </div>
  );
}

export default App;
