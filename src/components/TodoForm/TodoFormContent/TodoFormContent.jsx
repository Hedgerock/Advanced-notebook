import { useTodoFormContext } from "../../hooks"
import { TodoFormItemProvider } from "../hoc"
import { TodoFormAddButton } from "../TodoFormAddButton"
import { TodoFormItemButton } from "../TodoFormItemButton";

import './TodoFormContent.css';

export const TodoFormContent = ({ children }) => {
    const { contentInputData } = useTodoFormContext();

    return (
        <div className="todo-form-content">
            { contentInputData.map((item, index) => {
                const { id } = item

                return (
                    <TodoFormItemProvider key={ id } data = { item }>
                        {children}
                        { index !== 0 && 
                            <TodoFormItemButton /> 
                        }
                    </TodoFormItemProvider>

                )
            }) }

            <TodoFormAddButton />
        </div>
    )
}