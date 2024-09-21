
import TodoFormP from '../../../context/todoFormContext'
import { useInitNewTodo } from '../../hooks';
import { enterEvent } from '../../utils';

import './TodoFormProvider.css';

export const TodoFormProvider = ({ children }) => {
    const { value, setValue, initNewTodo, title, content } = useInitNewTodo();

    return (
        <TodoFormP value = {{ value, setValue, initNewTodo, title, content, enterEvent }}>
            { children }
        </TodoFormP>
    )
}