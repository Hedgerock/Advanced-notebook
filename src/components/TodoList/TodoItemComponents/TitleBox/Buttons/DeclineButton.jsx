import { useTodoItemContext } from "../../../../hooks"

export const DeclineButton = ({ setEditStatus, setTitleValue }) => {
    const { data } = useTodoItemContext();
    const { title } = data;

    return (
        <button
            className="selection-box__button"
            title="decline"
            onClick={ () => {
                setEditStatus(false)
                setTitleValue(title)
            } }
        ><i className="fa-solid fa-xmark"></i></button>
    )
}