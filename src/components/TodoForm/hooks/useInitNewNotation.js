import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";

export const useInitNewNotation = () => {
    const { notationContainer, buttonIcons, setContentInputData, data } = useTodoFormItemContext();
    const { create } = buttonIcons;

    const initNewNotation = () => {
        setContentInputData(prev => {
            return prev.map(item => {
                return item.id === data.id
                    ? {...item, notation: {
                        ...item.notation, 
                        value: [...item.notation.value, { 
                            id: Math.max.apply(null, item.notation.value.map(el => el.id)) + 1, 
                            text: '' 
                        }]
                    }}
                    : item
            })
        })
    }

    return { notationContainer, create, initNewNotation }
}