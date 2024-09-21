import { useTodoItemContext } from '../../../hooks';
import { useInitNewSubTodo } from '../hooks';
import './AddSubTodo.css';

export const AddSubTodo = () => {
    const { subValue, setSubValue } = useTodoItemContext();
    const { createSubTodo } = useInitNewSubTodo();

    return (
        <div className="add-subtodo">
            <input 
                type="text"
                className='add-subtodo__input'
                onChange={ e => setSubValue(e.target.value) }
                placeholder='Type new subtodo here'
                value={ subValue }
            />
            <button
                onClick={ createSubTodo }
                disabled = { !subValue }
                className='add-subtodo__button'
            >send
            </button>
        </div>
    )
}