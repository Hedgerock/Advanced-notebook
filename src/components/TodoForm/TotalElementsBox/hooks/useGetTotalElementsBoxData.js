import { useTodoContext } from "../../../hooks";
import { useGetCounted } from "../../hooks";

export const useGetTotalElementsBoxData = ({ data, setData, modificator, childId, currentValue }) => {

    const { buttonIcons } = useTodoContext();
    const { 
        calcHandler, 
        counterHandler, 
        isCounted,
        incrementer, 
        decrementer, 
        curCount 
    } = useGetCounted({ data, setData, modificator, childId, currentValue });

    const actualClassName = `total-elements ${ !isCounted ? 'total-elements_disabled' : '' }`;

    return { buttonIcons, actualClassName, calcHandler, counterHandler, isCounted, incrementer, decrementer, curCount }
}