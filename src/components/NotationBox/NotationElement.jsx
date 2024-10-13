import { ButtonIcon } from "../ButtonIcon";
import { useNotationContext } from "../hooks/useNotationContext";
import { useTodoFormItemContext } from "../hooks/useTodoForItemContext";
import { TodoFormInputBoxButton } from "../TodoForm";
import { useNotationBoxButtons } from "./hooks";
import './NotationElement.css';

export const NotationElement = () => {
    const { value, valueIndex, currentClassName } = useNotationContext();
    const { data } = useTodoFormItemContext();

    const { notationButtons, initChangeNotation, actualPlaceholder } = useNotationBoxButtons({ value, valueIndex });
    const isLastElement = valueIndex === data.notation.value.length - 1;

    return (
        <div className={`${ currentClassName }-element ${ isLastElement ? `${ currentClassName }-element_last-element` : '' }`}>
            <input
                className={ `todo-form__input todo-form__input_notation${value.text ? '' : '-empty'}` }
                placeholder={ actualPlaceholder }
                value = { value.text }
                onChange={ initChangeNotation }
            />

            
            { notationButtons.map(button => {
                const { id, condition, buttonFunc, buttonModificator, buttonValue } = button;

                return (
                    condition &&
                    <TodoFormInputBoxButton
                        currentClassName = 'notation-element__button'
                        key={ id }
                        func = { buttonFunc } 
                        modificator = { buttonModificator }
                    >
                        <ButtonIcon value={ buttonValue }/>
                    </TodoFormInputBoxButton>
                )
                })
            }
        </div>
    )
}