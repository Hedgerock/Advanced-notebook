import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";
import { BoxButtons } from "../BoxButtons";
import { useGetButtonsBox } from "../hooks";


export const NotationsElementEditBox = () => {
    const { 
        editNotation, 
        setEditNotation, 
    } = useNotationsElementContext();

    const { buttonsBox } = useGetButtonsBox();
    const { activeEdition } = buttonsBox;

    return (
        <> 
            <BoxButtons data = { activeEdition }/>

            <input 
                className="todo-item__text todo-item__text_notation" 
                type="text" 
                value = { editNotation } 
                onChange={ (e) => setEditNotation(e.target.value) }
            />
        </>
    )
}