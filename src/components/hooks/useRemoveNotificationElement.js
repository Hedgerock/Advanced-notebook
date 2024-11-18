import { useEffect, useState } from "react";
import { useTodoContext } from "./useTodoContext";

export const useRemoveNotificationElement = ({ data }) => {
    const { id } = data;
    const { setNotificationData } = useTodoContext();
    const [curPercent, setCurPercent] = useState(0);

    useEffect(() => {
        let start;
        const duration = 3500;

        const step = (timestamp) => {
            if (!start) start = timestamp;
            
            const progress = timestamp - start;

            const newPercent = Math.floor((progress / duration) * 100, 100);
            setCurPercent(newPercent);

            newPercent < 100
                ? requestAnimationFrame(step)
                : setNotificationData((prev) => prev.filter((el) => el.id !== id));
        };

        requestAnimationFrame(step);

        return () => cancelAnimationFrame(step);
    }, [id, setNotificationData]);

    return { curPercent };
};
