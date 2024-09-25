import { ButtonIcon } from "../../../../../ButtonIcon";
import { useInitConfirmOrDecline } from "../hooks";
import './DeclineButton.css';

export const DeclineButton = () => {
    const { initDecline, decline } = useInitConfirmOrDecline(); 

    return (
        <button
            className="selection-box__button"
            title="decline"
            onClick={ initDecline }
        >
            <ButtonIcon value={ decline }/>
        </button>
    )
}