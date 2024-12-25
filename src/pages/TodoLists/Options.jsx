import { ButtonIcon } from "../../components/ButtonIcon"
import { buttonIcons } from "../../data"

export const Options = ({ setList, data: el }) => {
    const { edit, delete: delButton } = buttonIcons;

    const deleteHandler = () => {
        setList(prev => {
            return prev.filter(val => val.id !== el.id);
        })
    }

    return (
        <div className="options">
            <button
                className="options__button"
                title = { `Edit ${ el.title } (comming soon)` }
                disabled = { true }
            >
                <ButtonIcon value = { edit } />
            </button>
            <button
                className="options__button"
                onClick={ deleteHandler }
                title = { `Delete ${ el.title }` }
            >
                <ButtonIcon value = { delButton } />
            </button>
        </div>
    )
}