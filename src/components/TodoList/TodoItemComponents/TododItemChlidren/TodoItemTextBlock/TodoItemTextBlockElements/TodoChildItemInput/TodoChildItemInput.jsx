import { TotalElementsBox } from "../../../../../../TodoForm/TotalElementsBox";
import { useGetNewCount } from "../../../hooks";
import './TodoChildItemInput.css';

export const TodoChildItemInput = () => {
    const { newData, setNewData, subTodoValue, changeValue } = useGetNewCount();
    const actualClassName = `todo-item__text todo-item__text_input`

    return (
        <>
            <input
                className= { actualClassName }
                type="text" 
                value={ subTodoValue.text } 
                onChange={ changeValue }
            />

            <TotalElementsBox 
                data = { newData }
                setData = { setNewData }
                isExistedTodo = { true }
                currentValue={ newData?.value || 1 }
                status={ newData?.status || false }
            />
        </>
    )
}