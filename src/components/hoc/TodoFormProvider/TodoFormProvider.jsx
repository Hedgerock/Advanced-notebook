import TodoFormP from '../../../context/todoFormContext'
import { useInitNewData, useTodoContext, useValidateData } from '../../hooks';
import { enterEvent } from '../../utils';

import './TodoFormProvider.css';

export const TodoFormProvider = ({ 
        children, 
        mainData, 
        setMainData, 
        initDataFunction, 
        isDataWithTitle = true, 
        isCurrentChild = false,
        isCleanAfterCreation = true,
        isNotChildElement = true,
        mainId = null
    }) => {

    const { 
        value, 
        setValue, 
        initNewData, 
        title, 
        content, 
        altTitle 
    } = useInitNewData({ mainData, initDataFunction, isDataWithTitle, mainId, isNotChildElement });

    const { buttonIcons } = useTodoContext();
    const { isDataReady } = useValidateData({ mainData, isNotChildElement, mainId })
    const isNotated = mainData.some(el => el.notation.status);

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
                    isCleanAfterCreation,
                    isNotChildElement,
                    mainId,
                    isNotated
                }
            }>
            { children }
        </TodoFormP>
    )
}