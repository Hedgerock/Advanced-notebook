import { useTodoContext } from '../../hooks'
import './ModalCloseButton.css';

export const ModalCloseButton = () => {
    const { setModal } = useTodoContext();

    return (
        <button
            className='modal__close-btn'
            onClick={ () => setModal(false) }
        >Close
        </button>
    )
}