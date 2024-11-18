import { useEffect, useState } from "react";
import { useTodoContext } from "../../hooks";

export const useUpdateData = ({ data, setData, index }) => {
    const { contentInputData, setContentInputData } = useTodoContext();
    
    const [ curData, setCurData ] = useState(data.contentValue);

    useEffect(() => {
        setData(prev => {
            return prev.map(el => {
                return el.id === data.id
                    ? {...el, contentValue: curData}
                    : el
            })
        })
    }, [curData, data.id, setData])

    const prevIndex = index - 1;
    const nextIndex = index + 1;

    const prevElement = contentInputData[index - 1];
    const nextElement = contentInputData[index + 1];

    const initPrevElement = () => {

        setContentInputData(prev => {
            return prev.map((el, curIndex) => {
                if (index === curIndex) return prevElement
                
                if (prevIndex === curIndex) return data

                return el
            })
        })

    }

    const initDeleteTodo = () => {

        setContentInputData(prev => {
            return prev.filter(el => el.id !== data.id);
        })

    }

    const initNextElement = () => {

        setContentInputData(prev => {
            return prev.map((el, curIndex) => {
                if (index === curIndex) return nextElement
                
                if (nextIndex === curIndex) return data

                return el
            })
        })

    }

    return { initNextElement, initPrevElement, initDeleteTodo, prevElement, nextElement, curData, setCurData }
}