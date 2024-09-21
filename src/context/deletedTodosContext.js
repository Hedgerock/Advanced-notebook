import { createContext } from "react";

const initialValue = {};

export const deletedTodosContext = createContext(initialValue);

export default deletedTodosContext.Provider