import TodoFormP from '../../../context/todoFormContext'
import { useInitNewData, useTodoContext } from '../../hooks';
import { checkAllContentValue } from '../../TodoForm/utils';
import { enterEvent } from '../../utils';

import './TodoFormProvider.css';

export const TodoFormProvider = ({ 
        children, 
        mainData, 
        setMainData, 
        initDataFunction, 
        isDataWithTitle, 
        isCurrentChild = false,
        isCleanAfterCreation = true
    }) => {
    const { value, setValue, initNewData, title, content, altTitle } = useInitNewData({ mainData, initDataFunction, isDataWithTitle });
    const { buttonIcons } = useTodoContext();

    const isDataReady = checkAllContentValue({ 
        data: mainData, 
        key: ['content', 'notation'] 
    }) 

    return (
        <TodoFormP value = {
                { 
                    value, 
                    setValue, 
                    initNewData, 
                    title, 
                    content, 
                    enterEvent, 
                    altTitle,
                    mainData, 
                    setMainData,
                    buttonIcons,
                    isDataReady,
                    isDataWithTitle,
                    isCurrentChild,
                    isCleanAfterCreation
                }
            }>
            { children }
        </TodoFormP>
    )
}