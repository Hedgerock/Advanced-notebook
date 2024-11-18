import { ButtonIcon } from "../ButtonIcon";
import { useTodoContext } from "../hooks";

export const TodoContstructorModalCloseButton = ({ closeFunc }) => {
    const { buttonIcons } = useTodoContext();
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
