import { TodoFormItemProvider } from "../hoc"
import { useGetTodoFormContentData } from "../hooks";
import { TodoFormAddButton } from "../TodoFormAddButton"

import './TodoFormContent.css';

export const TodoFormContent = ({ children }) => {
    const { currentClassName,  mainData, setMainData, isCurrentChild } = useGetTodoFormContentData();
    
    
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
            { !isCurrentChild && <TodoFormAddButton /> }
        </div>
    )
}