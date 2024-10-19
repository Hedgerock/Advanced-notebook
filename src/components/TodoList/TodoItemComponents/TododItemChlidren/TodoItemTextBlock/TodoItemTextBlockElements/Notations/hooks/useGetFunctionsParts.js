import { useNotationsElementContext } from "../../../../../../../TodoForm/hooks/useNotationsElementContext";

export const useGetFunctionsParts = () => {
    const { 
        parentId, 
        mainParentId, 
        id, 
        editNotation, 
        setIsEdit, 
    } = useNotationsElementContext();


    const editionProcessHandler = () => {
        setIsEdit(prev => !prev)
    }

    const updateMainParent = ({ data, parentFunc, childFunc, editFunc }) => {
        return data.map(el => {
            return parentFunc({ data: el, childFunc, editFunc })
        })
    }

    const updateParent = ({ data, childFunc, editFunc }) => {
        return data.id === mainParentId
            ? {...data, text: data.text.map(val => {
                return childFunc({ data: val, editFunc })
            })}
            : data
    }

    const updateChild = ({ data, editFunc }) => {
        return data.id === parentId
            ? {...data, notation: editFunc({ data: data.notation })}
            : data
    }

    const filterNotation = ({ data }) => {
        return data.filter(n => n.id !== id)
    }

    const editNotationText = ({ data }) => {
        return data.map(n => {
            return n.id === id
                ? {...n, text: editNotation}
                : n
        })
    }

    return { editNotationText, editionProcessHandler, filterNotation, updateChild, updateParent, updateMainParent }
}