import { useTitleBoxContext } from '../../hooks';
import './TodoItemTitleInput.css';

export const TodoItemTitleInput = () => {
    const { titleValue, setTitleValue } = useTitleBoxContext();

    return (
        <input
            className="todo-item__title todo-item__title_input"
            type='text'
            value = { titleValue }
            onChange={ e => setTitleValue(e.target.value) }
        />
    )
}