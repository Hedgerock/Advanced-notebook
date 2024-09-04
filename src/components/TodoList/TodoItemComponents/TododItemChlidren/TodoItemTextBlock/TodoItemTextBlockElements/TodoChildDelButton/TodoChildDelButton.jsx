
import { getFilteredData } from '../../../../utils';
import { useTodoItemChildContext } from '../../../hooks';
import { getActualTextData } from '../../../utils';
import './TodoChildDelButton.css';

export const TodoChildDelButton = () => {
    const {
        todo,
        setTodo,
        text,
        id,
        subtodoId,
        subtodoText
    } = useTodoItemChildContext();

    return (
        <button
            className='todo-item-child__del-btn'
            title = { `Delete: ${ subtodoText }` }
            onClick={ () => {
                const filteredText = getFilteredData({ data: text, id: subtodoId })
                setTodo(!filteredText.length 
                    ? getFilteredData({ data: todo, id })
                    : getActualTextData({ data:todo, id, filteredText, currentKey: 'status' }))
            } }
        >
            <i className="fa-solid fa-trash"></i>
        </button>
    )
}