import { useTodoItemChildContext } from "./TododItemChlidren/hooks";
import { checkAllstatuses, getFilteredData, getUpdatedTodo } from "./utils";


export const ChangeBox = () => {
    const {
        todo,
        setTodo,
        text,
        id,
        changeStatus,
        setChangeStatus,
        subtodoId,
        subtodoText
    } = useTodoItemChildContext();

    const buttonValue = changeStatus 
        ? <i className="fa-solid fa-check"></i> 
        : <i className="fa-solid fa-pen"></i>

    const currentTitle = changeStatus 
        ? `Confirm: ${ subtodoText }` 
        : `Edit: ${ subtodoText }`

    return (
        <div className="change-box">
            <button
                className="todo-item-child__edit-btn"
                title = { currentTitle }
                onClick={ () => {
                    setChangeStatus(prev => !prev)
                    if (!subtodoText) {
                        const updatedText = getFilteredData({ data: text, id: subtodoId })
                        const boolean = checkAllstatuses({ data: updatedText, key: 'status' })
                        setTodo(updatedText.length
                            ? getUpdatedTodo({ data: todo, id, newData: updatedText, boolean })
                            : getFilteredData({ data: todo, id })
                        )
                    }
                } }
            >{ buttonValue }
            </button>
        </div>
    )
}