import { ButtonsList } from "../ButtonsList";
import { TotalElementsBox } from "../TodoForm/TotalElementsBox/TotalElementsBox";
import { useGetNotationElementContent } from "./hooks";
import './NotationElement.css';

export const NotationElement = () => {
    const { 
        actualClassName, 
        inputClassName, 
        setMainData, 
        notationButtons, 
        initChangeNotation, 
        actualPlaceholder, 
        value, 
        data, 
        isLastElement 
    } = useGetNotationElementContent();

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
                    status = { value.count.status }
                />
            }
        </div>
    )
}