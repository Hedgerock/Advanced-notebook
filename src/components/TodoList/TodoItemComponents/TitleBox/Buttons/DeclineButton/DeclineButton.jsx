import { useInitConfirmOrDecline } from "../hooks";
import './DeclineButton.css';

export const DeclineButton = () => {
    const { initDecline } = useInitConfirmOrDecline(); 

    return (
        <button
            className="selection-box__button"
            title="decline"
            onClick={ initDecline }
        ><i className="fa-solid fa-xmark"></i></button>
    )
}