
import SearchByNotesContextProvider from '../../../context/searchByNotesContext';
import { useTodoContext } from '../../hooks';

export const SearchByNotesProvider = ({ children, data, allNotations }) => {
    const { todo, setTodo, setAllNotations } = useTodoContext();
    const { id, title, count } = data;

    return (
        <SearchByNotesContextProvider value = {{
            todo,
            setTodo,
            allNotations,
            setAllNotations,
            id,
            title,
            count
        }}>
            { children }
        </SearchByNotesContextProvider>
    )
}