import DeletedTodosContextProvider from '../../../context/deletedTodosContext';
import { useTodoContext } from '../../hooks';

import './DeletedTodosProvider.css';

export const DeletedTodosProvider = ({ children, data }) => {
    const { deletedTodos, setTodo, buttonIcons } = useTodoContext(); 

    return (
        <DeletedTodosContextProvider value={ { data, deletedTodos, setTodo, buttonIcons } }>
            { children }
        </DeletedTodosContextProvider>
    )
}