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
                            id: Math.max.apply(null, item.notation.value.map(el => el.id)) + 1, 
                            text: '' 
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