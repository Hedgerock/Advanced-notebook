import { useTodoContext } from "../../../hooks";
import { useGetCounted } from "../../hooks";

export const useGetTotalElementsBoxData = ({ data, setData, modificator, childId, currentValue, status, isExistedTodo, parentId }) => {

    const { buttonIcons } = useTodoContext();
    const { 
        calcHandler, 
        counterHandler, 
        isCounted,
        incrementer, 
        decrementer, 
        curCount 
    } = useGetCounted({ data, setData, modificator, childId, currentValue, status, isExistedTodo, parentId });

    const actualClassName = `total-elements ${ !status ? 'total-elements_disabled' : '' }`;

    return { buttonIcons, actualClassName, calcHandler, counterHandler, isCounted, incrementer, decrementer, curCount }
}