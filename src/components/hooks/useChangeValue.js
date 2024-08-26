import { useEffect, useState } from "react";
import { useTodoContext } from "./useTodoContext";

export const useChangeValue = ({ text = [], id }) => {
    const { setTodo, todo } = useTodoContext();

    const curEl = todo.find(val => val.id === id);
    const curTextVal = curEl?.text?.find(val => text.find(el => el.id === val.id));
    const initialText = curTextVal?.text;
    const currentValId = curTextVal?.id;

    const [ currentVal, setCurrentVal ] = useState(initialText);
    const [ subTodo, setSubTodo ] = useState(curEl);

    useEffect(() => {

        setTodo(todo
            .map(item => {
                return (
                    item.id === id 
                    ? { ...item, text: item.text.map(el => {
                        return (
                            el.id === currentValId 
                                ? {...el, text: currentVal } 
                                : {...el}
                        )
                    }
                    )}
                    : { ...item }
                )
            }
            ))

    }, [ currentVal ])

    return { currentVal, setCurrentVal, curEl, curTextVal, currentValId, subTodo, setSubTodo }
}