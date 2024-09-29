import { ButtonIcon } from '../../../ButtonIcon';
import { useTodoItemContext } from '../../../hooks';
import { enterEvent } from '../../../utils';
import { useInitNewSubTodo } from '../hooks';
import './AddSubTodo.css';

export const AddSubTodo = () => {
    const { subValue, setSubValue, buttonIcons } = useTodoItemContext();
    const { createSubTodo } = useInitNewSubTodo();
    const { create } = buttonIcons

    return (
        <div className="add-subtodo">
            <input 
                type="text"
                className='add-subtodo__input'
                onChange={ e => setSubValue(e.target.value) }
                onKeyDown={ (event) => enterEvent(event, subValue, createSubTodo) }
                placeholder='Type new subtodo here'
                value={ subValue }
            />
            <button
                onClick={ createSubTodo }
                disabled = { !subValue }
                className='add-subtodo__button'
            ><ButtonIcon value = { create }/>
            </button>
        </div>
    )
}