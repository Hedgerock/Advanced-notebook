import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";
import { BoxButtons } from "../BoxButtons";
import { useGetButtonsBox } from "../hooks";
import { NotationsElementEditBox } from "./NotationsElementEditBox";
import { NotationsElementText } from "./NotationsElementText";


export const NotationElement = () => {
    const { isEdit } = useNotationsElementContext();
    const { buttonsBox } = useGetButtonsBox();

    const { nonActiveEdition } = buttonsBox

    return (
        <div className="notations-element">
            { !isEdit && 
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