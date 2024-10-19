import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";


export const NotationsElementText = () => {
    const { text } = useNotationsElementContext();

    return (
        <span
            className="todo-item__text todo-item__text_notation"
            title={ `Notation: ${ text }` }
        >
            { text }
        </span>
    )
}