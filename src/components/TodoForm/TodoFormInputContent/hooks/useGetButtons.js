import { useTodoContext } from "../../../hooks";
import { useTodoFormItemContext } from "../../../hooks/useTodoForItemContext";
import { useChangeInputValue } from "../../hooks";

export const useGetButtons = () => {
    const {
        mainData,
        initPrevVal, 
        initNextVal, 
        index,
        notationHandler,
    } = useChangeInputValue();
    
    const { buttonIcons } = useTodoContext();
    const { data } = useTodoFormItemContext();
    const { up, down, create, remove } = buttonIcons;

    const { notation, content } = data;
    const currentStatus = data.notation.status;
    const arr = notation.value;
    const length = arr.length;

    const currentTitle = (modifcator) => {
        if (modifcator === 'create') {
            return `Create notation box for ${ content || 'subtodo' }`
        }

        const space = 'and';
        const spaceText = currentStatus ? space : ''
        const endOfWord = length > 1 ? 's' : '';

        const a = content || `subtodo ${ index + 1 }`;
        const b = currentStatus ? `${ spaceText } ${ length } notation${ endOfWord }` : "";

        if (modifcator === "non-counted") {
            return `Count subtodo: ${ a }`
        }

        if (modifcator === 'remove') {
            return `Remove ${ length } notation${ endOfWord } and ${ a }`
        }

        return `Move ${ a } ${ modifcator } ${ b }`
    }

    const buttons = [{ 
        id: 1,
        condition: !!mainData[index - 1],
        buttonFunc: initPrevVal,
        buttonModificator: 'up',
        buttonValue: up,
        title: currentTitle('up')
    },
    { 
        id: 2,
        condition: true,
        buttonFunc: notationHandler,
        buttonModificator: currentStatus ? 'remove' : 'create',
        buttonValue: currentStatus ? remove : create,
        title: currentTitle(currentStatus ? 'remove' : 'create')
    },
    { 
        id: 3,
        condition: !!mainData[index + 1],
        buttonFunc: initNextVal,
        buttonModificator: 'down',
        buttonValue: down,
        title: currentTitle('down')
    }]

    return { buttons }
}