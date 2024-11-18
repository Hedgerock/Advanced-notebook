import { ButtonIcon } from "../../ButtonIcon";
import { AdjacentButtons } from "./AdjacentButtons";
import { useGetTotalElementsBoxData } from "./hooks";

import './TotalElementsBox.css';

export const TotalElementsBox = ({ 
    setData, 
    data, 
    modificator = null, 
    childId = null,
    isLastElement = false,
    currentValue = null,
    status,
    isExistedTodo = false,
    parentId = null
}) => {

    const { 
        buttonIcons, 
        actualClassName, 
        calcHandler, 
        counterHandler, 
        incrementer, 
        decrementer, 
    } = useGetTotalElementsBoxData({ setData, data, modificator, childId, currentValue, status, isExistedTodo, parentId });

    const { on, off } = buttonIcons;
    const actualValue = status ? on : off;
    const a = isLastElement ? `-last-element`: '';
    const b = modificator ? `total-elements-box_${ modificator }${ a }` : 'total-elements-box_parent';
    const actualParentClassName = `total-elements-box ${ b }`;
    const currentTitle = modificator ? 'Notation counter' : 'Parent counter';

    return (
        <div className={ actualParentClassName } title= { currentTitle }>
            <div className={ actualClassName }>
                <AdjacentButtons 
                    incrementer = { incrementer } 
                    decrementer = { decrementer } 
                    isCounted = { status }
                    buttonIcons={ buttonIcons }
                >
                    <input 
                        className="total-elements__input" 
                        type="number"
                        value={ currentValue }
                        onChange={ counterHandler }
                    />
                </AdjacentButtons>
            </div>
            <button 
                className="total-elements-box__button total-elements-box__button_calculate"
                onClick={ calcHandler }
            >
                <ButtonIcon value = { actualValue } />
            </button>
        </div>
    )
}