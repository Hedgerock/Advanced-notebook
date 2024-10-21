import { ButtonIcon } from '../../ButtonIcon';
import { useModalBoxesContext } from '../../hooks'

import './ModalBoxValue.css';

export const ModalBoxValue = () => {
    const { buttonFunc, buttonValue } = useModalBoxesContext();

    return (
        <button
            className="modal-box__value"
            onClick={ buttonFunc }
        >
            <ButtonIcon value={ buttonValue }/>
        </button >
    )
}