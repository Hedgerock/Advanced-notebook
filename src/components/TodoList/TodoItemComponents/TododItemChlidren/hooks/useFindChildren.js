import { useEffect, useState } from "react";
import { useTodoItemChildContext } from "./useTodoItemChildContext";

export const useFindChildren = () => {
    const { 
        lastChildChildren, 
        firstChildChildren, 
        searchParam, 
        setSearchParam, 
        subtodoText, 
        notation, 
        isChangable, 
        curEl,
        subtodoId 
    } = useTodoItemChildContext();

    const [ value, setValue ] = useState(''); 

    const titleBoxClassName =  value.length && subtodoText.includes(value) && isChangable 
        ? 'todo-item-text-block_searched' 
        : '';
    const titleBoxWithNotation = notation.some(el => el.text.length) 
        ? `todo-item-text-block_with-notations` : '';

    const actualId = curEl.text.map(el => el.id);
    const isNotOfTheMainList = !actualId.includes(subtodoId) ? 'todo-item-text-block_new-potential-element' : '';

    const rawChildrenClassName = `todo-item-text-block ${ firstChildChildren } ${ lastChildChildren } ${ titleBoxClassName } ${ titleBoxWithNotation } ${ isNotOfTheMainList }`;
    const childrenClassName = rawChildrenClassName.split(' ').filter(el => el).join(' ');

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue('');
        }, 5000)

        setValue(searchParam);

        return () => clearTimeout(timer);
    }, [searchParam, setSearchParam])


    return { childrenClassName }
}