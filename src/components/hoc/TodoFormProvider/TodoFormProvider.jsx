import { useEffect } from 'react';
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
        isCleanAfterCreation = true,
        isNotChildElement = true,
        mainId = null
    }) => {
    const { value, setValue, initNewData, title, content, altTitle } = useInitNewData({ mainData, initDataFunction, isDataWithTitle, mainId, isNotChildElement });
    const { buttonIcons, setContentInputData } = useTodoContext();

    const isDataReady = checkAllContentValue({ 
        data: mainData, 
        key: ['content', 'notation'] 
    }) 

    useEffect(() => {
        if (!isNotChildElement) {
            setContentInputData(prev => {
                return prev.map(el => {
                    return el.id === mainId
                        ? {...el, isReady: !isDataReady}
                        : el
                })
            })
        }
    }, [isDataReady, isNotChildElement, mainId, setContentInputData, mainData])

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
                    mainId
                }
            }>
            { children }
        </TodoFormP>
    )
}