import { useTodoItemContext } from "../../../../hooks"

export const ConfirmButton = ({ titleValue, setTitleValue, updateTitle, setEditStatus }) => {
    const { todo, setTodo, data } = useTodoItemContext();
    const { id } = data

    return (
        <button
            className="selection-box__button"
            title = "confirm"
            onClick={ () => {
                setTodo(updateTitle({ data: todo }))
                setEditStatus(false)
                setTitleValue(titleValue || `Todo collection number ${ id }`)
            } }
        ><i className="fa-solid fa-check"></i></button>
    )
}