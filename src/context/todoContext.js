import { createContext } from "react";

const initialValue = {};

export const TodoContext = createContext(initialValue);

export default TodoContext.Provider;