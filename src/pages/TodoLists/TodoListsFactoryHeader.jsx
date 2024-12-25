import { ButtonIcon } from "../../components/ButtonIcon"
import { buttonIcons } from "../../data"

export const TodoListsFactoryHeader = ({ openHandler }) => {
    const { create } = buttonIcons;

    return (
        <div className="todo-lists-factory-header">
            <h1
                className="todo-lists-factory-header__title"
            >
                Your todo lists
            </h1>

            <button
                title = { 'Create new todo list' }
                onClick={ openHandler }
                className="todo-lists-factory-header__button"
            >
                <ButtonIcon value={ create }/>
            </button>
        </div>
    )
}