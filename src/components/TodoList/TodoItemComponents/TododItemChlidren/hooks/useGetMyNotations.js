import { useEffect, useState } from "react";
import { initialNotation, todoFormInterface } from "../../../../../data";

export const useGetMyNotations = ({ notation, subTodoValue, subtodoId, subtodoText, count }) => {

    const actualNotation = Array.isArray(notation) ? notation : initialNotation.value
    const currentNotation = { status: true, value: actualNotation };
    const [ notations, setNotations ] = useState([todoFormInterface({ 
        id: subtodoId,
        content: subTodoValue.text,
        notation: currentNotation, 
        count: subTodoValue.count 
    })])

    const myNotations = notations[0];
    useEffect(() => {
        const currentNotation = Array.isArray(notation) 
            ? { status: true, value: notation.length ? notation : initialNotation.value } 
            : { value: initialNotation.value, status: true }

        setNotations(prev => ([{...prev[0], content: subTodoValue.text, notation: currentNotation, count: subTodoValue.count}]))
    }, [notation, subtodoText, count, subTodoValue])

    return { notations, setNotations, myNotations, actualNotation }
}