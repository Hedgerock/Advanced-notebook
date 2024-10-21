import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";


export const NotationsElementText = () => {
    const { text, isActive } = useNotationsElementContext();

    return (
        <span
            className={`todo-item__text todo-item__text_notation${ isActive ? '-active' : '' }`}
            title={ `Notation: ${ text }` }
        >
            { text }
        </span>
    )
}