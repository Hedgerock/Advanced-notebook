

import './TitleBox.css';
import { TodoItemTitle } from './TodoItemTitle';
import { TodoItemTitleInput } from './TodoItemTitleInput';
import { ConfirmButton, DeclineButton } from './Buttons';
import { useTitleBoxContext } from '../hooks';

export const TitleBox = () => {
    const { titleBoxClassName, editStatus } = useTitleBoxContext();

    return (
        <div className={ titleBoxClassName }>
            {!editStatus
                ? <TodoItemTitle />
                : <TodoItemTitleInput />
            }

            {editStatus &&
                <div className="selection-box">
                    <ConfirmButton />
                    <DeclineButton />
                </div>
            }
        </div>
    )
}