import { useTodoItemContext } from '../../../hooks';
import './AddSubTodo.css';

export const AddSubTodo = () => {
    const { 
        curEl,
        currentValId,
        subValue, 
        setSubValue, 
        initNewSubTodo,
        data
    } = useTodoItemContext();

    const { text } = data;

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
                onClick={ () => {
                    initNewSubTodo({ id: currentValId, curEl, text })
                    setSubValue('');
                } }
                disabled = { !subValue }
                className='add-subtodo__button'
            >send
            </button>
        </div>
    )
}