import { ButtonIcon } from "../ButtonIcon"

export const TodoFormChildHeader = ({ data, buttons }) => {

    return (
        <>
            <div className="todo-form-box todo-form-box_info">
                <h1 className="todo-form-box__title">{ data.title }</h1>
            </div>

            { buttons.map(button => (
                button.condition && 
                    <button
                        key = { button.id }
                        disabled = { button.disabledStatus }
                        title={ button.title }
                        className={ button.buttonClassName }
                        onClick={ button.buttonFunc }
                    >
                        <ButtonIcon value = { button.buttonIcon }/>
                    </button>
                )) 
            }
        </>
    )
}