import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
export interface IInterface {
  name: string;
  last: string;
}

const INITIAL_STATE: IInterface = {
  name: "Fernando",
  last: "Soares",
};

export interface IState {
  state: IInterface;
  change?: (name: string, last: string) => void;
}

export const TodoProvider = ({ children }: any) => {
  const [state, setState] = useState<IState>({
    state: INITIAL_STATE,
  } as IState);
  const change = (name: string, last: string) => {
    setState({ state: { name, last } });
  };
  return (
    <TodoContext.Provider value={{ ...state, change }}>
      {children}
    </TodoContext.Provider>
  );
};
