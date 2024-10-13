import { ButtonIcon } from "../../ButtonIcon";
import { useChangeInputValue } from "../hooks";
import { TodoFormItemButton } from "../TodoFormItemButton";
import { useGetButtons } from "./hooks";
import { TodoFormInputBoxButton } from "./TodoFormInputBoxButton"

export const TodoFormInputBoxButtons = ({ children }) => {
    const { index } = useChangeInputValue();
    const { buttons } = useGetButtons();

    return (
        <>
            { buttons.map(button => {
                const { id, condition, buttonFunc, buttonModificator, buttonValue, title } = button;

                    return (
                        condition &&
                        <TodoFormInputBoxButton
                            title = { title }
                            key={ id }
                            func = { buttonFunc } 
                            modificator = { buttonModificator }
                        >
                            <ButtonIcon value={ buttonValue }/>
                        </TodoFormInputBoxButton>
                    )
                })
            }
            
            { index !== 0 && <TodoFormItemButton /> }

            { children }
        </>
    )
}