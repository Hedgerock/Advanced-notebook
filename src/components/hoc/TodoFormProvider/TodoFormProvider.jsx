
import { useState } from 'react';
import TodoFormP from '../../../context/todoFormContext'
import { useInitNewTodo, useTodoContext } from '../../hooks';
import { enterEvent } from '../../utils';

import './TodoFormProvider.css';

export const TodoFormProvider = ({ children }) => {
    const { value, setValue, initNewTodo, title, content, altTitle } = useInitNewTodo();
    const [ contentInputData, setContentInputData ] = useState([{ id: 1, content: '' }])
    const { buttonIcons } = useTodoContext();

    return (
        <TodoFormP value = {
                { 
                    value, 
                    setValue, 
                    initNewTodo, 
                    title, 
                    content, 
                    enterEvent, 
                    altTitle,
                    contentInputData, 
                    setContentInputData,
                    buttonIcons
                }
            }>
            { children }
        </TodoFormP>
    )
}