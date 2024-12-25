import { buttonIcons } from "../../data";
import { ButtonIcon } from "../ButtonIcon";

export const TodoContstructorModalCloseButton = ({ closeFunc }) => {
    const { decline } = buttonIcons;
    return (
        <button
            className='add-subtodo__button add-subtodo__button_close-subtodo-modal'
            onClick={ closeFunc }
        >
            <ButtonIcon value={decline} />
        </button>
    );
};
