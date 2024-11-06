import TodoFormItemContextProvider from '../../../context/todoFormItemContext';

import './TodoFormItemProvider.css';
import { useTodoContext } from '../../hooks';
import { NotationBox } from '../../NotationBox/NotationBox';
import { useGetTodoFormItemProviderData } from '../hooks';
import { TotalElementsBox } from '../TotalElementsBox';

export const TodoFormItemProvider = ({ children, data, index, setMainData, mainData }) => {
    const { buttonIcons } = useTodoContext();
    const { status } = data;
    
    const { 
        notationList, 
        setNotationList, 
    } = useGetTodoFormItemProviderData({ data, setMainData });

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
                    setNotationList
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
                <TotalElementsBox data = { data } setData = { setMainData } currentValue={ data.count.value }/>
            </div>
        </TodoFormItemContextProvider>
    )
}