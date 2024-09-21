import { useTodoItemContext } from '../../../../hooks';
import { useFindTitle, useInitNewTitle } from '../../hooks';

import TitleBoxContextProvider from '../context/titleBoxContext';

export const TitleBoxProvider = ({ children }) => {
    const { data, todo, setTodo } = useTodoItemContext();
    const { title, id } = data
    const { editStatus, setEditStatus, titleValue, setTitleValue, updateTitle } = useInitNewTitle({ title, id })
    const { titleBoxClassName } = useFindTitle({ title })

    return (
        <TitleBoxContextProvider value = {{
            todo,
            setTodo,
            data,
            title,
            id,
            editStatus, 
            setEditStatus,
            titleValue, 
            setTitleValue, 
            updateTitle,
            titleBoxClassName
        }}>
            { children }
        </TitleBoxContextProvider>
    )
}