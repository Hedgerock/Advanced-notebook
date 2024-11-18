import { useEffect, useState } from "react";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useGetNewCount = () => {
    const { subTodoValue, setSubTodoValue, count } = useTodoItemChildContext();
    const [ newData, setNewData ] = useState(count);

    /* useEffect(() => {
        setTodo(prev => {
            return prev.map(el => {
                return el.id === id
                    ? {...el, text: el.text.map(val => {
                        return val.id === subtodoId
                            ? {...val, count: newData, notation: val.notation.map(v => {
                                const actualValue =  v.count?.value || 1
                                return {...v, count: {...v.count, value: actualValue, derivative: actualValue * newData?.value || 1}}
                            })}
                            : val
                    })}
                    : el
            })
        })
    }, [id, newData, setTodo, subtodoId]) */

    const changeValue = (e) => {
        setSubTodoValue(prev => ({...prev, text: e.target.value}));
    }

    useEffect(() => {
        setSubTodoValue(prev => ({...prev, count: newData}))
    }, [newData, setSubTodoValue])

    return { newData, setNewData, subTodoValue, setSubTodoValue, changeValue }
}