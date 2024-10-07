import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";

export const useInitChangeNotation = ({ value, valueIndex }) => {
    const { index, contentInputData, data, setContentInputData } = useTodoFormItemContext();

    const curSubTodoNum = index + 1;
    const curValueNum = valueIndex + 1;
    
    const curretValuePlaceHolder = data.notation.value.length > 1 ? `(${ curValueNum })` : '';

    const actualPlaceholder = contentInputData.length > 1 
        ? `Notation for subtodo №${ curSubTodoNum} ${ curretValuePlaceHolder }` 
        : `Notation ${ curretValuePlaceHolder }`

    const initChangeNotation = (e) => {
        setContentInputData(prev =>{
            return prev.map(item => {
                return item.id === data.id
                    ? {...item, notation: {...item.notation, value: item.notation.value.map(el => {
                        return el.id === value.id
                            ? {...el, text: e.target.value}
                            : el
                        })
                    }}
                    : item
            })
        })
    }

    const deleteNotation = () => {
        setContentInputData(prev =>{
            return prev.map(item => {
                return item.id === data.id
                    ? {...item, notation: {...item.notation, value: item.notation.value.filter(el => el.id !== value.id)}}
                    : item
            })
        })
    }

    return { initChangeNotation, actualPlaceholder, deleteNotation }
}