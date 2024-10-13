import './NotificationBox.css';

export const NotificationBox = ({ children, data }) => {
    
    return (
        <div 
            className="notification-box" 
        >
            { children }
        </div>
    )
}