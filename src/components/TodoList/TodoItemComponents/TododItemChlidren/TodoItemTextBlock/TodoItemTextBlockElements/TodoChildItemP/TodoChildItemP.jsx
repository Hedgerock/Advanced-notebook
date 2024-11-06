import { useGetSubTodoCopied, useTodoItemChildContext } from "../../../hooks";
import './TodoChildItemP.css';

export const TodoChildItemP = () => {
    const { subtodoText, isChangable, count } = useTodoItemChildContext();
    const { initCopy } = useGetSubTodoCopied();

    return (
        <div
            className={`todo-item__text`}
            title = { isChangable ? `Copy: ${ subtodoText }` : subtodoText }
            onClick={ e => {
                if (!isChangable) return;
                initCopy({ e })
            } } 
        >
            <span>{ subtodoText }</span> 
            { count?.status && 
                <span>
                    <b> Total: { count.value }</b>
                </span>}
        </div>
    )
}