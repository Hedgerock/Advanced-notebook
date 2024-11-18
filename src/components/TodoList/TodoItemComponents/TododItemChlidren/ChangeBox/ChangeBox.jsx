

import { ButtonIcon } from '../../../../ButtonIcon';
import { useChangeBoxState, useTodoItemChildContext } from '../hooks';
import './ChangeBox.css';

export const ChangeBox = () => {
    const { initChangeValue, currentTitle, buttonValue, currentButtonValue,  } = useChangeBoxState();
    const { changeStatus, setChangeStatus, subtodoText, setSubTodoValue, count } = useTodoItemChildContext();

    return (
        <div className="change-box">
            <button
                className="todo-item-child__edit-btn"
                title = { currentTitle }
                onClick={ initChangeValue }
            >
                <ButtonIcon value={ buttonValue }/>
            </button>

            { changeStatus &&
                <button
                    className="todo-item-child__edit-btn"
                    title = 'Decline changes'
                    onClick={ () => {
                        setChangeStatus(false);
                        setSubTodoValue({ text: subtodoText, count });
                    } }
                >
                    <ButtonIcon value={ currentButtonValue }/>
                </button>
            }
        </div>
    )
}