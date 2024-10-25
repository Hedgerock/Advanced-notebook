import { TodoFormButton } from './TodoFormButton';
import { TodoFormInputContent } from './TodoFormInputContent';
import { TodoFormContent } from './TodoFormContent/TodoFormContent';
import { TodoFormInputTitle } from './TodoFormInputTitle';

import './TodoForm.css';
import { useTodoFormContext } from '../hooks';

export const TodoForm = () => {
    const { isDataWithTitle, isNotChildElement } = useTodoFormContext();

    return (
        <div className="todo-form">

            <TodoFormContent>
                <TodoFormInputContent />
            </TodoFormContent>

            {isDataWithTitle && <TodoFormInputTitle />}
            
            { isNotChildElement && <TodoFormButton /> }

        </div>
    )
}