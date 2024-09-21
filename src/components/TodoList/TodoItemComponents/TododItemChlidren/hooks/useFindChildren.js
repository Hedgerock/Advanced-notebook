import { useEffect, useState } from "react";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useFindChildren = () => {
    const { lastChildChildren, firstChildChildren, searchParam, setSearchParam, subtodoText } = useTodoItemChildContext();

    const [ value, setValue ] = useState(''); 

    const titleBoxClassName =  value.length && subtodoText.includes(value) 
        ? 'todo-item-text-block_searched' 
        : '';
        
    const childrenClassName = `todo-item-text-block ${ firstChildChildren } ${ lastChildChildren } ${ titleBoxClassName }`

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue('');
        }, 5000)

        setValue(searchParam);

        return () => clearTimeout(timer);
    }, [searchParam, setSearchParam])

    return { childrenClassName }
}