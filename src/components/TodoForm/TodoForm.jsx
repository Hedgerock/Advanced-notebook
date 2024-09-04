
import { useTodoFormContext } from '../hooks';
import './TodoForm.css';
import { TodoFormButton } from './TodoFormButton';
import { TodoFormInput } from './TodoFormInput';

export const TodoForm = () => {
   const { title, content } = useTodoFormContext();

    return (
        <div className="todo-form">

            <TodoFormInput 
                inputKey = 'content'
                inputValue = { content }
            />
            <TodoFormInput 
                inputKey = 'title'
                inputValue = { title}
            />
            
            <TodoFormButton />

        </div>
    )
}