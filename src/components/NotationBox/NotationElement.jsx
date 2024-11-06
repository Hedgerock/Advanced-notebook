import { useNotationContext } from "../hooks/useNotationContext";
import { useTodoFormItemContext } from "../hooks/useTodoForItemContext";
import { ButtonsList } from "../TodoForm/ButtonsList";
import { TotalElementsBox } from "../TodoForm/TotalElementsBox/TotalElementsBox";
import { useNotationBoxButtons } from "./hooks";
import './NotationElement.css';

export const NotationElement = () => {
    const { value, valueIndex, currentClassName } = useNotationContext();
    const { data, setMainData } = useTodoFormItemContext();

    const { notationButtons, initChangeNotation, actualPlaceholder } = useNotationBoxButtons({ value, valueIndex });
    const isLastElement = valueIndex === data.notation.value.length - 1;
    const a = isLastElement ? `${ currentClassName }-element_last-element` : '';
    const b = !value.count.status && valueIndex !== data.notation.value.length - 1
    ? `${ currentClassName }-element_last-element-specific` 
    : ``;
    const c = valueIndex === data.notation.value.length - 1 && data.count.status ? `${ currentClassName }-element_last-element-specific-last-child`: '';
    const d = valueIndex === 0 && data.notation.value.length - 1 === 0 ? `${ currentClassName }-element_last-element-specific-first-child`: ''

    const actualClassName = `${ currentClassName }-element ${ a } ${ b } ${ c } ${ d }`.split(' ').filter(el => el).join(' ');
    const inputClassName = `todo-form__input todo-form__input_notation${value.text ? '' : '-empty'}`;

    return (
        <div className={ actualClassName }>
            <input
                className={ inputClassName }
                placeholder={ actualPlaceholder }
                value = { value.text }
                onChange={ initChangeNotation }
            />

            <ButtonsList 
                data = { notationButtons } 
                currentClassName={ 'notation-element__button' }
            />

            { data.count.status && 
                <TotalElementsBox 
                    data = { data } 
                    setData = { setMainData } 
                    modificator = { 'notation' }
                    childId = { value.id }
                    isLastElement = { isLastElement }
                    currentValue = { value.count.value }
                />
            }
        </div>
    )
}