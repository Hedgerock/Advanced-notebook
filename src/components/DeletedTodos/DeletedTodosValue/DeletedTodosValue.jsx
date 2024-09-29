import { ButtonIcon } from '../../ButtonIcon';
import { useTodoContext } from '../../hooks'

import './DeletedTodosValue.css';

export const DeletedTodosValue = () => {
    const { setModal, buttonIcons } = useTodoContext();
    const { deletedList } = buttonIcons

    return (
        <button
            title='Recently deleted todos'
            className="deleted-todos__value"
            onClick={ () => setModal(prev => !prev) }
        >
            <ButtonIcon value={ deletedList }/>
        </button >
    )
}