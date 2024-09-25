import { ButtonIcon } from '../../ButtonIcon';
import { useTodoContext } from '../../hooks'
import './ModalCloseButton.css';

export const ModalCloseButton = () => {
    const { setModal, buttonIcons } = useTodoContext();
    const { decline } = buttonIcons;

    return (
        <button
            className='modal__close-btn'
            onClick={ () => setModal(false) }
        >
            <ButtonIcon value={ decline }/>
        </button>
    )
}