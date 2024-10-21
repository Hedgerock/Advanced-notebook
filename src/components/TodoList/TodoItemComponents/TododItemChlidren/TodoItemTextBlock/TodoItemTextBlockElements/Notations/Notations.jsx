import { ButtonIcon } from "../../../../../../ButtonIcon";
import { useTodoItemChildContext } from "../../../hooks";
import { FilteredNotationsList } from "./hoc";
import { NotationsElementButton, NotationElement } from "./NotationsElement";

import './Notations.css';
import { useGetFilteredNotations } from "./hooks/useGetFilteredNotations";
export const Notations = () => {
    const { buttonIcons, changeStatus } = useTodoItemChildContext();
    const { create } = buttonIcons;
    const { filteredNotation, actualText, switchHandler } = useGetFilteredNotations();
    
    return (
        <div className="notations">
            { changeStatus && 
                <NotationsElementButton 
                    func = { switchHandler } 
                    modificatior = { 'create' } 
                    title = { actualText }
                >
                    <ButtonIcon value = { create }/>
                </NotationsElementButton>
            }
            { filteredNotation.length > 0 &&
                <FilteredNotationsList data = { filteredNotation }>
                    <NotationElement />
                </FilteredNotationsList>
            }
        </div>
    )
}