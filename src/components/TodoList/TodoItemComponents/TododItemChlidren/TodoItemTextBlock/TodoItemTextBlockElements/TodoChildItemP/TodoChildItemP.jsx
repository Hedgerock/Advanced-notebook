import { useGetSubTodoCopied, useTodoItemChildContext } from "../../../hooks";
import './TodoChildItemP.css';

export const TodoChildItemP = () => {
    const { subTodoValue, isChangable, count } = useTodoItemChildContext();
    const { initCopy } = useGetSubTodoCopied();

    return (
        <div
            className={`todo-item__text`}
            title = { isChangable ? `Copy: ${ subTodoValue.text }` : subTodoValue.text }
            onClick={ e => {
                if (!isChangable) return;
                initCopy({ e })
            } } 
        >
            <span>{ subTodoValue.text }</span> 
            { count?.status && 
                <span>
                    <b> Total: { subTodoValue.count.value }</b>
                </span>}
        </div>
    )
}