import TodoFormItemContextProvider from '../../../context/todoFormItemContext';
import { useTodoFormContext } from '../../hooks';

import './TodoFormItemProvider.css';

export const TodoFormItemProvider = ({ children, data }) => {
    const { contentInputData, setContentInputData, buttonIcons } = useTodoFormContext();

    return (
        <TodoFormItemContextProvider value={ { contentInputData, setContentInputData, data, buttonIcons } }>
            <div className="todo-form-item">
                { children }
            </div>
        </TodoFormItemContextProvider>
    )
}