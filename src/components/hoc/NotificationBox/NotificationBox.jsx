import './NotificationBox.css';

export const NotificationBox = ({ children, data }) => {
    const { text } = data


    return (
        <div 
            className="notification-box" 
            title={ text }
        >
            { children }
        </div>
    )
}