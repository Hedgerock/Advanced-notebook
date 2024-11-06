import { useEffect } from "react"
import { checkAllContentValue } from "../TodoForm/utils"
import { useTodoContext } from "./useTodoContext";

export const useValidateData = ({ mainData, isNotChildElement, mainId }) => {
    const { setContentInputData } = useTodoContext();

    const isDataReady = checkAllContentValue({ 
        data: mainData, 
        key: ['content', 'notation'] 
    }) 

    useEffect(() => {
        if (!isNotChildElement) {
            setContentInputData(prev => {
                return prev.map(el => {
                    return el.id === mainId
                        ? {...el, isReady: !isDataReady}
                        : el
                })
            })
        }
    }, [isDataReady, isNotChildElement, mainId, setContentInputData, mainData])

    return { isDataReady }
}