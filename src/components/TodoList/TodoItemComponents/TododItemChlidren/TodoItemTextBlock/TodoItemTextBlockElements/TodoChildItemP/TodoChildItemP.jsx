import { useGetSubTodoCopied, useTodoItemChildContext } from "../../../hooks";
import './TodoChildItemP.css';

export const TodoChildItemP = () => {
    const { subtodoText, isChangable } = useTodoItemChildContext();
    const { initCopy } = useGetSubTodoCopied();

    return (
        <p
            className='todo-item__text'
            title = { isChangable ? `Copy: ${ subtodoText }` : subtodoText }
            onClick={ e => {
                if (!isChangable) return;
                initCopy({ e })
            } } 
        >
        { subtodoText }
        </p>
    )
}