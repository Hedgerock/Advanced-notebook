import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";
import { useTodoItemChildContext } from "../../../../hooks";
import { BoxButtons } from "../BoxButtons";
import { useGetButtonsBox } from "../hooks";
import { NotationsElementEditBox } from "./NotationsElementEditBox";
import { NotationsElementText } from "./NotationsElementText";


export const NotationElement = () => {
    const { isEdit, isChangable } = useNotationsElementContext();
    const { buttonsBox } = useGetButtonsBox();
    const { changeStatus } = useTodoItemChildContext();

    const { nonActiveEdition } = buttonsBox

    return (
        <div className={`notations-element`}>
            { (!isEdit && changeStatus && isChangable) && 
                <BoxButtons data = { nonActiveEdition }/>
            }
            {
                !isEdit
                    ? <NotationsElementText />
                    : <NotationsElementEditBox />
            }
        </div>
    )
}