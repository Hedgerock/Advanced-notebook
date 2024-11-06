import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";


export const NotationsElementText = () => {
    const { text, isActive, count, notationCount } = useNotationsElementContext();

    return (
        <div
            className={`todo-item__text todo-item__text_notation${ isActive ? '-active' : '' }`}
            title={ `Notation: ${ text }` }
        >
            <span>{ text }</span>
            <span>{ count?.status && `${ count.value} x ${ notationCount.value } = ${ notationCount.derivative }` }</span>
        </div>
    )
}