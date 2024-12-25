import React from 'react';
import { useTodoContext } from '../../hooks';

import './NotificationContainer.css';

const DataWrapper = ({ data, children }) => {
    return React.cloneElement(children, { data });
}

export const NotificationContainer = ({ children }) => {
    const { notificationData } = useTodoContext();

    return !!notificationData.length && 
    <div className="wrapper">
        <div className="notification-container">
            {notificationData.map(el => (
            <DataWrapper key = { el.id } data={el}>
                {children}
            </DataWrapper>
            ))}
        </div>
    </div>
}