import { useState } from "react";
import { useTodoContext } from "./useTodoContext";

export const useChangeValue = ({ text = [], id }) => {
    const { todo } = useTodoContext();

    const curEl = todo.find(val => val.id === id);
    const curTextVal = curEl?.text?.find(val => text.find(el => el.id === val.id));
    const initialText = curTextVal?.text;
    const currentValId = curTextVal?.id;

    const [ currentVal, setCurrentVal ] = useState(initialText);
    const [ subTodo, setSubTodo ] = useState(curEl);

    return { currentVal, setCurrentVal, curEl, curTextVal, currentValId, subTodo, setSubTodo }
}