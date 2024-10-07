import TodoFormItemContextProvider from '../../../context/todoFormItemContext';
import { NotationBox } from '../NotationBox';

import './TodoFormItemProvider.css';
import { useTodoFormContext } from '../../hooks';

export const TodoFormItemProvider = ({ children, data, index }) => {
    const { contentInputData, setContentInputData, buttonIcons } = useTodoFormContext();
    const { status } = data;


    return (
        <TodoFormItemContextProvider 
            value={ 
                { 
                    contentInputData, 
                    setContentInputData, 
                    data, 
                    buttonIcons, 
                    index, 
                    status
                } 
        }>
            <div className="todo-form-item">
                { children }
                { data.notation?.status && <NotationBox /> }
            </div>
        </TodoFormItemContextProvider>
    )
}