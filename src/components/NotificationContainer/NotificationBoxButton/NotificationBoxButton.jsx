import { useTodoContext } from '../../hooks';
import './NotificationBoxButton.css'

export const NotificationBoxButton = ({ id }) => {
    const { setNotificationData } = useTodoContext();

    return (
        <button
            className='notification-box__button'
            onClick={ () => setNotificationData(prev => prev.filter(item => item.id !== id)) }
        >
            X
        </button>
    )
}