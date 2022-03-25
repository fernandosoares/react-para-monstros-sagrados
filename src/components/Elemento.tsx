import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Elemento = () => {
  const { state, change } = useContext(TodoContext);
  console.log(state);

  const handleClick = () => {
    // @ts-ignore
    change("Pedro", "Monstro");
  };

  return (
    <div>
      <h1>DADOS DO MELIANTE</h1>
      <button onClick={handleClick}>Alterar State</button>
      {state.name}
      {state.last}
    </div>
  );
};

export default Elemento;
