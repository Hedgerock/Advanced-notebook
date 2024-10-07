import { useEffect, useState } from "react";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useFindChildren = () => {
    const { lastChildChildren, firstChildChildren, searchParam, setSearchParam, subtodoText, notation } = useTodoItemChildContext();

    const [ value, setValue ] = useState(''); 

    const titleBoxClassName =  value.length && subtodoText.includes(value) 
        ? 'todo-item-text-block_searched' 
        : '';
    const titleBoxWithNotation = notation ? 'todo-item-text-block_with-notation' : '';
        
    const childrenClassName = `todo-item-text-block ${ firstChildChildren } ${ lastChildChildren } ${ titleBoxClassName } ${ titleBoxWithNotation }`

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue('');
        }, 5000)

        setValue(searchParam);

        return () => clearTimeout(timer);
    }, [searchParam, setSearchParam])

    return { childrenClassName }
}