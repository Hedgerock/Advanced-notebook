import DeletedTodosContextProvider from '../../../context/deletedTodosContext';
import { useTodoContext } from '../../hooks';

import './DeletedTodosProvider.css';

export const DeletedTodosProvider = ({ children, data }) => {
    const { deletedTodos, setTodo } = useTodoContext(); 

    return (
        <DeletedTodosContextProvider value={ { data, deletedTodos, setTodo } }>
            { children }
        </DeletedTodosContextProvider>
    )
}