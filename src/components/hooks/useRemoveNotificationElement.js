import { useEffect, useState } from "react";
import { useTodoContext } from "./useTodoContext";

export const useRemoveNotificationElement = ({ data }) => {
    const { id } = data

    const { setNotificationData } = useTodoContext();
    const [ curPercent, setCurPercent ] = useState(0);
    const [ curInterval, setCurrentInterval ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (curPercent >= 100) {
                setNotificationData(prev => prev.filter(el => el.id !== id))
                return
            }

            setCurPercent(Math.floor((curInterval / 3500) * 100))

            setCurrentInterval(prev => prev + 10)
        }, 10)

        return () => clearInterval(interval)
    }, [ curInterval, setCurrentInterval, id, curPercent, setNotificationData])

    return { curPercent }
}