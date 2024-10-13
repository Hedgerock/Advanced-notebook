import TodoFormItemContextProvider from '../../../context/todoFormItemContext';

import './TodoFormItemProvider.css';
import { useTodoContext } from '../../hooks';
import { useEffect, useState } from 'react';
import { NotationBox } from '../../NotationBox/NotationBox';

export const TodoFormItemProvider = ({ children, data, index, setMainData, mainData }) => {
    const { buttonIcons } = useTodoContext();
    const { status } = data;

    const [notationList, setNotationList] = useState(data.notation.value);

    useEffect(() => {
        setMainData(prev => {
            return prev.map(el => {
                return el.id === data.id
                    ? {...el, notation: {...el.notation, value: notationList}}
                    : el
            })
        })

    }, [data.id, setMainData, notationList ]);
    

    return (
        <TodoFormItemContextProvider 
            value={ 
                { 
                    mainData,
                    setMainData,
                    data, 
                    buttonIcons, 
                    index, 
                    status,
                    notationList, 
                    setNotationList,
                } 
        }>
            <div className="todo-form-item">
                { children }
                { data.notation?.status && 
                    <NotationBox 
                        data = { data } 
                        notationList={ notationList } 
                        setNotationList={ setNotationList }
                        currentClassName = "notation"
                        index = { index }
                        mainData={ mainData }
                        setMainData={ setMainData }
                    /> 
                }
            </div>
        </TodoFormItemContextProvider>
    )
}