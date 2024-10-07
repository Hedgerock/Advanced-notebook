import { ButtonIcon } from "../../ButtonIcon";
import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";
import { useInitNewNotation } from "../hooks";
import { NotationElement } from "./NotationElement";

export const NotationBox = () => {
    const { create, initNewNotation } = useInitNewNotation();
    const { data } = useTodoFormItemContext();

    return (
        <div className="notation-box">
            { data.notation.value.map((value, valueIndex) => (
                <NotationElement
                    key={ valueIndex }
                    value = { value } 
                    valueIndex = { valueIndex }
                />
            ))
            
            }
            <button 
                className='todo-form__add-btn'
                title='Create new notation'
                onClick={ initNewNotation }
            >
                <ButtonIcon value = { create }/>
            </button>
    </div>
    )
}