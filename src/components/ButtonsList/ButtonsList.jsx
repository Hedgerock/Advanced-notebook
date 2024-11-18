import { ButtonIcon } from "../ButtonIcon";
import { CurrentButton } from "./CurrentButton";

export const ButtonsList = ({ data, currentClassName }) => {

    return data.map(button => {
        const { id, condition, buttonFunc, buttonModificator, buttonValue, title } = button;

            return (
                condition &&
                <CurrentButton
                    currentClassName={ currentClassName }
                    title = { title }
                    key={ id }
                    func = { buttonFunc } 
                    modificator = { buttonModificator }
                >
                    <ButtonIcon value={ buttonValue }/>
                </CurrentButton>
            )
        }
    )
}