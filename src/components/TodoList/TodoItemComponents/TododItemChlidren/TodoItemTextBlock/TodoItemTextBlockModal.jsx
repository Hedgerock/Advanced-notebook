import { useTodoItemChildContext } from "../hooks";
import { FilteredNotationsList } from "./TodoItemTextBlockElements/Notations/hoc";
import { NotationElement } from "./TodoItemTextBlockElements/Notations/NotationsElement";

export const TodoItemTextBlockModal = () => {
    const { myNotations } = useTodoItemChildContext();

    return (
        <div className="todo-item-text-block todo-item-text-block_edit-variant">

            <div className="text-box-container">
                <div className="notations">
                    <FilteredNotationsList 
                        data = { myNotations.notation.value }
                        parentValue = { myNotations }
                    >
                        <NotationElement />
                    </FilteredNotationsList>
                </div>
                <div className="todo-item-text-box">

                    <span className="todo-item__text">{ myNotations.content }</span>
                    { myNotations.count.status && 
                    <span className="todo-item__text">
                        <b> Total: { myNotations.count.value }</b>
                    </span>}

                </div>
            </div>

        </div>
    )
}