import './NotificationTextBox.css';

export const NotificationTextBox = ({ children }) => {

    return (
        <div className="notification-text-box">
            { children }
        </div>
    )
}