import './NotificationBoxTimer.css';

export const NotificationBoxTimer = ({ curPercent }) => {

    return (
        <div 
            className="notification-box__timer"
            style={
                {
                    background: `silver`,
                    width: `${ 100 - curPercent }%`
                }
            }
        ></div>
    )
}