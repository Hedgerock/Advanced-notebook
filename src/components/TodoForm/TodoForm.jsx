
import { useInitNewTodo } from '../hooks';
import './TodoForm.css';

export const TodoForm = () => {
   const { value, setValue, initNewTodo, title, content } = useInitNewTodo();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && content) {
            initNewTodo();
        }
    };

    return (
        <div className="todo-form">
            <input 
                className='todo-form__input'
                type="text" 
                placeholder='Type here'
                value={ content }
                onChange={ e => setValue({ ...value, content: e.target.value }) }
                onKeyDown={ handleKeyDown }
            />
            <input 
                className='todo-form__input'
                type="text" 
                placeholder='Title'
                value={ title }
                onChange={ e => setValue({ ...value, title: e.target.value }) }
                onKeyDown={ handleKeyDown }
            />
            <button
                className='todo-form__add-btn'
                onClick={ initNewTodo }
                disabled = { !content }
            >Send
            </button>
        </div>
    )
}