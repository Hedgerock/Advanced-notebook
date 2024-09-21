import { useGetSubTodoCopied, useTodoItemChildContext } from "../../../hooks";
import './TodoChildItemP.css';

export const TodoChildItemP = () => {
    const { subtodoText } = useTodoItemChildContext();
    const { initCopy } = useGetSubTodoCopied();

    return (
        <p
            className='todo-item__text'
            title = { `Copy: ${ subtodoText }` }
            onClick={ e => initCopy({ e }) } 
        >
        { subtodoText }
        </p>
    )
}