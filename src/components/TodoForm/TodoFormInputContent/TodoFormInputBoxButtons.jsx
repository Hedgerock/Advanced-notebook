import { ButtonsList } from "../../ButtonsList";
import { useChangeInputValue } from "../hooks";
import { TodoFormItemButton } from "../TodoFormItemButton";
import { useGetButtons } from "./hooks";

export const TodoFormInputBoxButtons = ({ children, data }) => {
    const { index } = useChangeInputValue();
    const { buttons } = useGetButtons();

    return (
        <>
            <ButtonsList data = { buttons } />
            
            { index !== 0 && 
                <TodoFormItemButton /> 
            }

            { children }
        </>
    )
}