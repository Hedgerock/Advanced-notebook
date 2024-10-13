import { useTodoFormContext } from "../../hooks"
import { TodoFormItemProvider } from "../hoc"
import { TodoFormAddButton } from "../TodoFormAddButton"

import './TodoFormContent.css';

export const TodoFormContent = ({ children }) => {
    const { mainData, setMainData } = useTodoFormContext();
    
    const isMoreThanOne = mainData.length >= 1;
    const isNotationBoxExists = mainData.some(el => el.notation.status);

    const currentClassName = `todo-form-content ${ isMoreThanOne ? `todo-form-content_alter${ isNotationBoxExists ? "" : "-non-notation" }` : '' }`
    
    return (
        <div className={ currentClassName }>
            { mainData.map((item, index) => {
                const { id } = item
                return (
                    <TodoFormItemProvider 
                        key={ id }
                        data = { item } 
                        index = { index }
                        mainData={ mainData }
                        setMainData = { setMainData }
                        notation = { item.notation.value }
                    >
                        {children}
                    </TodoFormItemProvider>

                )
            }) }
            <TodoFormAddButton />
        </div>
    )
}