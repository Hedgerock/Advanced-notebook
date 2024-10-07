import TodoFormP from '../../../context/todoFormContext'
import { useInitNewTodo, useTodoContext } from '../../hooks';
import { checkAllContentValue } from '../../TodoForm/utils';
import { enterEvent } from '../../utils';

import './TodoFormProvider.css';

export const TodoFormProvider = ({ children }) => {
    const { value, setValue, initNewTodo, title, content, altTitle } = useInitNewTodo();
    const { contentInputData, setContentInputData, buttonIcons } = useTodoContext();

    const isDataReady = checkAllContentValue({ 
        data: contentInputData, 
        key: ['content', 'notation'] 
    }) 

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
                    buttonIcons,
                    isDataReady
                }
            }>
            { children }
        </TodoFormP>
    )
}