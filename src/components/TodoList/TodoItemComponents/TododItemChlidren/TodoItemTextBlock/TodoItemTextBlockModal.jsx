import { useTodoItemChildContext } from "../hooks";

export const TodoItemTextBlockModal = () => {
    const { myNotations } = useTodoItemChildContext();

    return (
        <div className="todo-item-text-block todo-item-text-block_edit-variant">

            <div className="text-box-container">
                <div className="notations">
                    { myNotations.notation.value.map(el => (
                        <span 
                            key = { el.id } 
                            className="todo-item__text todo-item__text_notation"
                        >
                            { el.text }
                        </span>
                    )) }
                </div>
                <span className="todo-item__text">{ myNotations.content }</span>
            </div>

        </div>
    )
}