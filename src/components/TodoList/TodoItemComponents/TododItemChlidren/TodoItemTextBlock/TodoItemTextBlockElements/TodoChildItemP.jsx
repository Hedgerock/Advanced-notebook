import { useTodoItemChildContext } from "../../hooks"

export const TodoChildItemP = () => {
    const { subtodoText, currentId, setCopyData, copyData, title } = useTodoItemChildContext();
    const idVal =  currentId ? currentId + 1 : 1

    return (
        <p
            className='todo-item__text'
            title = { `Copy: ${ subtodoText }` }
            onClick={ e => {
                navigator.clipboard.writeText(e.target.innerText);
                setCopyData(() => {
                    const arr = [...copyData, { id: idVal, text: e.target.innerText, title }];

                    return arr.length >= 3 ? arr.slice(1) : arr
                })
            } }
        >
        { subtodoText }
        </p>
    )
}