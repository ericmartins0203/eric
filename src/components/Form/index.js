import { useState } from "react/cjs/react.development";

function Form({ addTodo }) {
  const [inputList, setInputList] = useState("");

  return (
    <>
      <label>Lista de atividades</label>
      <input
        value={inputList}
        onChange={(evt) => setInputList(evt.target.value)}
      ></input>
      <button onClick={() => addTodo(inputList)}>Enviar</button>
    </>
  );
}

export default Form;
