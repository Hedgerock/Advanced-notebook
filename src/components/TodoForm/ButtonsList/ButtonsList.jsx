import { ButtonIcon } from "../../ButtonIcon";
import { TodoFormInputBoxButton } from "../TodoFormInputContent";

export const ButtonsList = ({ data, currentClassName }) => {

    return  data.map(button => {
        const { id, condition, buttonFunc, buttonModificator, buttonValue, title } = button;

            return (
                condition &&
                <TodoFormInputBoxButton
                    currentClassName={ currentClassName }
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