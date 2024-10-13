import { ButtonIcon } from "../../../ButtonIcon";
import { useTodoItemContext } from "../../../hooks";

export const SubtodoModalCloseBtn = () => {
    const { buttonIcons, setCreateSubTodoModal } = useTodoItemContext();
    const { decline } = buttonIcons

    return (
        <button
            className='add-subtodo__button add-subtodo__button_close-subtodo-modal'
            onClick={ () => setCreateSubTodoModal(false) }
        >
        <ButtonIcon value = { decline }/>
    </button>
    )
}