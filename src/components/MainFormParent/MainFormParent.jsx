import { useTodoContext } from "../hooks";
import { ButtonIcon } from "../ButtonIcon";

import './MainFormParent.css';
import { MainFormChild } from "./MainFormChild";
import { useGetValue } from "./hooks";

export const MainFormParent = () => {
    const { contentInputData, setContentInputData } = useTodoContext();
    const { actualClassName, buttons } = useGetValue();
    const actualButtonsClassName = `todo-form-box-buttons ${ contentInputData.length > 1 ? 'todo-form-box-buttons_extended' : '' }`

    return <div className={ actualClassName }>
        {contentInputData.map((el, index) => (
            <MainFormChild 
                key = { el.id } 
                data = { el }
                index = { index }
                setData = { setContentInputData }
            />
            )
        )}

        <div className={ actualButtonsClassName }>
            { buttons.map(button => (
                button.condition && 
                    <button
                        key = { button.id }
                        disabled = { button.disabledStatus }
                        title={ button.title }
                        className= { button.buttonClassName }
                        onClick={ button.buttonFunc }
                    >
                        <ButtonIcon value = { button.buttonIcon }/>
                    </button>
                )) 
            }
        </div>
    </div>
}   
