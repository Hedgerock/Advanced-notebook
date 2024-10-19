import { ButtonIcon } from "../../../ButtonIcon";
import { useTodoItemContext } from "../../../hooks";

export const SubtodoModalCloseBtn = ({ closeFunc }) => {
    const { buttonIcons } = useTodoItemContext();
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
