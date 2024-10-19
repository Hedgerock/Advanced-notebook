import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";
import { useGetFunctionsParts } from "./useGetFunctionsParts";

export const useButtonsFunctions = () => {
    const { 
        setData,
        editNotation, 
        setIsEdit, 
        setEditNotation, 
        text 
    } = useNotationsElementContext();

    const { 
        editNotationText, 
        editionProcessHandler, 
        filterNotation, 
        updateChild, 
        updateParent, 
        updateMainParent 
    } = useGetFunctionsParts();

    const deleteNotation = () => {

        setData(prev => updateMainParent({ 
            data: prev, 
            parentFunc: updateParent, 
            childFunc: updateChild,
            editFunc: filterNotation
        }))

    }

    const confirmNotation = () => {

        setData(prev => updateMainParent({ 
            data: prev, 
            parentFunc: updateParent, 
            childFunc: updateChild,
            editFunc: editNotation.length ? editNotationText : filterNotation
        }))

        setIsEdit(false)
    }

    const declineNotation = () => {
        setIsEdit(false)
        setEditNotation(text);
    }

    return { editionProcessHandler, deleteNotation, confirmNotation, declineNotation }
}