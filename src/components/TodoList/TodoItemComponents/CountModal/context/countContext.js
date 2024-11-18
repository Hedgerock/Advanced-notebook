import { createContext } from "react";

const initialValue = {};

export const countContext = createContext({ initialValue })

export default countContext.Provider