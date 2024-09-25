import { TodoFormButton } from './TodoFormButton';
import { TodoFormInputContent } from './TodoFormInputContent';
import { TodoFormContent } from './TodoFormContent/TodoFormContent';
import { TodoFormInputTitle } from './TodoFormInputTitle';

import './TodoForm.css';

export const TodoForm = () => {

    return (
        <div className="todo-form">

            <TodoFormContent>
                <TodoFormInputContent />
            </TodoFormContent>

            <TodoFormInputTitle />
            
            <TodoFormButton />

        </div>
    )
}