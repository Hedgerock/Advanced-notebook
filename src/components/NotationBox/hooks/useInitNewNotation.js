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
                            count: { status: false, value: 1, derivative: 1 * data.count.value }
                        }]
                    }}
                    : item
            })
        })

       /*  setNotationList(prev => {
            const newId = Math.max.apply(null, prev.map(el => el.id)) + 1;
            const res = [...prev, { id: newId, text: '' }]

            return res
        }) */
    }

    return { create, initNewNotation }
}