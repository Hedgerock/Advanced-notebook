import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";
import { useButtonsFunctions } from "./useButtonsFunctions";


export const useGetButtonsBox = () => {

    const { editionProcessHandler, deleteNotation, confirmNotation, declineNotation } = useButtonsFunctions();
    const { text, buttonIcons } = useNotationsElementContext();
    const { delete: currentValue, confirm, decline, edit } = buttonIcons;

    const buttonsBox = {
        nonActiveEdition: [
            { id: 1, func: editionProcessHandler, modificator: 'left', title: `Edit notation ${ text }`, icon: edit },
            { id: 2, func: deleteNotation, modificator: 'right', title: `Delete notation ${ text }`, icon: currentValue }
        ],
        activeEdition: [
            { id: 1, func: confirmNotation, modificator: 'left', title: `Confirm notation ${ text }`, icon: confirm },
            { id: 2, func: declineNotation, modificator: 'right', title: `Decline notation ${ text }`, icon: decline }
        ]
    }

    return { buttonsBox }
}