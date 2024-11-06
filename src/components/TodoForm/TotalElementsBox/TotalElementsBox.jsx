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
    currentValue = null
}) => {

    const { 
        buttonIcons, 
        actualClassName, 
        calcHandler, 
        counterHandler, 
        isCounted, 
        incrementer, 
        decrementer, 
        curCount
    } = useGetTotalElementsBoxData({ setData, data, modificator, childId, currentValue });

    const { on, off } = buttonIcons;
    const actualValue = isCounted ? on : off;
    const actualParentClassName = `total-elements-box ${ modificator ? `total-elements-box_${ modificator }${ isLastElement ? `-last-element`: '' }` : 'total-elements-box_parent' }`;

    return (
        <div className={ actualParentClassName }>
            <div className={ actualClassName }>
                <AdjacentButtons 
                    incrementer = { incrementer } 
                    decrementer = { decrementer } 
                    isCounted = { isCounted }
                    buttonIcons={ buttonIcons }
                >
                    <input 
                        className="total-elements__input" 
                        type="number"
                        value={ curCount }
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