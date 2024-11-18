export const CurrentButton = ({ func, modificator, children, currentClassName, title }) => {
    const actualClassName = `todo-form-input-box__button todo-form-input-box__button_${ modificator }`
    
    return (
        <button
            title = { title }
            onClick={ func }
            className={ currentClassName ?  `${currentClassName} ${ currentClassName }_${modificator}` : actualClassName }
        >
            { children }
        </button>
    )
}