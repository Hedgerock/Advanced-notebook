export const TodoFormInputBoxButton = ({ func, modificator, children }) => {
    const actualClassName = `todo-form-input-box__button todo-form-input-box__button_${ modificator }`
    
    return (
        <button
            onClick={ func }
            className={ actualClassName }
        >
            { children }
        </button>
    )
}