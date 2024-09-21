import { useState } from "react";

export const useGetNotificationData = () => {
    const [notificationData, setNotificationData] = useState([]);
    const currentId = notificationData?.map(el => el.id).sort((a,b) => b - a)[0];

    const initNewNotification = ({ data, textData, titleData, typeData }) => {
        const idVal =  currentId ? currentId + 1 : 1

        return [...data, { id: idVal, text: textData, title: titleData, type:typeData }]
    }

    return { notificationData, setNotificationData, currentId, initNewNotification }
}