import { useTodoContext } from "../../hooks";


export const useInitNewNotation = ({ setNotationList, data, setMainData }) => {
    const { buttonIcons } = useTodoContext();
    const { create } = buttonIcons;

    const initNewNotation = () => {
        setMainData(prev => {
            return prev.map(item => {
                return item.id === data.id
                    ? {...item, notation: {
                        ...item.notation, 
                        value: [...item.notation.value, { 
                            id: Date.now(), 
                            text: '',
                            isActive: false,
                            count: { status: item.count.status, value: 1, derivative: 1 * item.count.value }
                        }]
                    }}
                    : item
            })
        })
    }

    return { create, initNewNotation }
}