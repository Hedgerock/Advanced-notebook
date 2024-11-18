import { useNotationContext } from "../../hooks/useNotationContext";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";
import { useNotationBoxButtons } from "./useNotationBoxButtons";

export const useGetNotationElementContent = () => {

    const { value, valueIndex, currentClassName } = useNotationContext();
    const { data, setMainData } = useTodoFormItemContext();
    const { notationButtons, initChangeNotation, actualPlaceholder } = useNotationBoxButtons({ value, valueIndex });

    const lastNotationNumber = data.notation.value.length - 1;
    const currentStatus = !value.count?.status;
    const parentStatus = data.count?.status;

    const isLastElement = valueIndex === lastNotationNumber;
    const a = isLastElement ? `${ currentClassName }-element_last-element` : '';
    const b = currentStatus && valueIndex !== lastNotationNumber
    ? `${ currentClassName }-element_last-element-specific` 
    : ``;
    const c = valueIndex === lastNotationNumber && parentStatus ? `${ currentClassName }-element_last-element-specific-last-child`: '';
    const d = valueIndex === 0 && lastNotationNumber === 0 ? `${ currentClassName }-element_last-element-specific-first-child`: ''

    const actualClassName = `${ currentClassName }-element ${ a } ${ b } ${ c } ${ d }`.split(' ').filter(el => el).join(' ');
    const inputClassName = `todo-form__input todo-form__input_notation${value.text ? '' : '-empty'}`;

    return { 
        actualClassName, 
        inputClassName, 
        setMainData, 
        notationButtons, 
        initChangeNotation, 
        actualPlaceholder, 
        value, 
        data, 
        isLastElement  
    } 
}