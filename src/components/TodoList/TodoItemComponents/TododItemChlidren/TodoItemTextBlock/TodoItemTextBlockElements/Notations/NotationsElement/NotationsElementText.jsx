import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";


export const NotationsElementText = () => {
    const { text, isActive, notationCount, isChangable, parentValue, count } = useNotationsElementContext();

    const actualValue = isChangable ? count?.value : parentValue.count?.value;
    const currentStatus = isChangable ? count?.status : parentValue.count?.status
    const currentValue = `${ actualValue } x ${ notationCount?.value } = ${ notationCount?.derivative }`;

    return (
        <div
            className={`todo-item__text todo-item__text_notation${ isActive && isChangable ? '-active' : '' }`}
            title={ `Notation: ${ text }` }
        >
            <span>{ text }</span>
            { currentStatus && notationCount.status &&
                <span>{ currentValue }</span>
            }
        </div>
    )
}