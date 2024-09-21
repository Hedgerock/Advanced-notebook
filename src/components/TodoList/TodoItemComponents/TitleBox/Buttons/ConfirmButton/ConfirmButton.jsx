import { useInitConfirmOrDecline } from "../hooks";

import './ConfirmButton.css';

export const ConfirmButton = () => {
    const { initConfirm } = useInitConfirmOrDecline();

    return (
        <button
            className="selection-box__button"
            title = "confirm"
            onClick={ initConfirm }
        ><i className="fa-solid fa-check"></i></button>
    )
}