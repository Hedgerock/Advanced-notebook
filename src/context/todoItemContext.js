import { createContext } from "react";

const initialValue = {};

export const TodoItemContext = createContext(initialValue);

export default TodoItemContext.Provider;