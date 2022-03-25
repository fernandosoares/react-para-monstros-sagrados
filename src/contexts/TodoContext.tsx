import { createContext } from "react";
import { IState } from "./TodoProvider";

export const TodoContext = createContext({} as IState);
