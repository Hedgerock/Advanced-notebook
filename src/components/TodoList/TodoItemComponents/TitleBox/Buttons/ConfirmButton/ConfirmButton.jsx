import { ButtonIcon } from "../../../../../ButtonIcon";
import { useInitConfirmOrDecline } from "../hooks";

import './ConfirmButton.css';

export const ConfirmButton = () => {
    const { initConfirm, confirm } = useInitConfirmOrDecline();

    return (
        <button
            className="selection-box__button"
            title = "confirm"
            onClick={ initConfirm }
        >
            <ButtonIcon value={ confirm } />
        </button>
    )
}