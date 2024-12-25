import { useEffect, useState } from "react";
import { useTodoContext } from "./useTodoContext";

export const useRemoveNotificationElement = ({ data }) => {
    const { id } = data;
    const { setNotificationData } = useTodoContext();
    const [curPercent, setCurPercent] = useState(0);
    const TIME_DURATION = 3500;
    const TIME_IN_MILLIES = 100;

    useEffect(() => {
        let start;
        const duration = TIME_DURATION;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            
            const progress = timestamp - start;

            const newPercent = Math.floor((progress / duration) * 100, TIME_IN_MILLIES);
            setCurPercent(newPercent);

            newPercent < TIME_IN_MILLIES
                ? requestAnimationFrame(step)
                : setNotificationData((prev) => prev.filter((el) => el.id !== id));
        };

        requestAnimationFrame(step);

        return () => cancelAnimationFrame(step);
    }, [id, setNotificationData]);

    return { curPercent };
};
