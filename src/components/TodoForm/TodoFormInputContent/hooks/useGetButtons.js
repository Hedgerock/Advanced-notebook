import { useTodoFormContext } from "../../../hooks";
import { useTodoFormItemContext } from "../../../hooks/useTodoForItemContext";
import { useChangeInputValue } from "../../hooks";

export const useGetButtons = () => {
    const {
        contentInputData,
        initPrevVal, 
        initNextVal, 
        index,
        notationHandler,
    } = useChangeInputValue();
    
    const { buttonIcons } = useTodoFormContext();
    const { data } = useTodoFormItemContext();
    const { up, down, create, remove } = buttonIcons;

    const buttons = [{ 
        id: 1,
        condition: !!contentInputData[index - 1],
        buttonFunc: initPrevVal,
        buttonModificator: 'up',
        buttonValue: up
    },
    { 
        id: 2,
        condition: true,
        buttonFunc: notationHandler,
        buttonModificator: data.notation.status ? 'remove' : 'create',
        buttonValue: data.notation.status ? remove : create
    },
    { 
        id: 3,
        condition: !!contentInputData[index + 1],
        buttonFunc: initNextVal,
        buttonModificator: 'down',
        buttonValue: down
    }]

    return { buttons }
}