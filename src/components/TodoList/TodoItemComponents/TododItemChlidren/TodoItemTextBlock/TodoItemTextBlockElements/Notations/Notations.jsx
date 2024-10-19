import { ButtonIcon } from "../../../../../../ButtonIcon";
import { useTodoItemChildContext } from "../../../hooks";
import { NotationsElementProvider } from "./hoc";
import { NotationsElementButton, NotationElement } from "./NotationsElement";

import './Notations.css';
export const Notations = () => {
    const { notation, buttonIcons, changeStatus, setEditNotationHandler, subtodoText } = useTodoItemChildContext();
    const { create } = buttonIcons;
    const filteredNotation = notation.filter(el => el.text);

    const actualText = filteredNotation.length 
        ? `Edit current ${ subtodoText } notations` 
        : `Create notations for ${ subtodoText }`
    
    const switchHandler = () => {
        setEditNotationHandler(prev => !prev)
    }
    
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
                filteredNotation.map(el => {
                    const { id } = el;
                    
                    return (
                    <NotationsElementProvider key = { id } data = { el }>
                        <NotationElement />
                    </NotationsElementProvider>
                    )
                })
            }
        </div>
    )
}