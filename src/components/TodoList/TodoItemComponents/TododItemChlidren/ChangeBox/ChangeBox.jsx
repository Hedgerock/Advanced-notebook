

import { ButtonIcon } from '../../../../ButtonIcon';
import { useChangeBoxState } from '../hooks';
import './ChangeBox.css';

export const ChangeBox = () => {
    const { initChangeValue, currentTitle, buttonValue } = useChangeBoxState();

    return (
        <div className="change-box">
            <button
                className="todo-item-child__edit-btn"
                title = { currentTitle }
                onClick={ initChangeValue }
            ><ButtonIcon value={ buttonValue }/>
            </button>
        </div>
    )
}