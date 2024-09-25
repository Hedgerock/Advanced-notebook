import { ButtonIcon } from '../../ButtonIcon';
import { useTodoContext } from '../../hooks';
import './NotificationBoxButton.css'

export const NotificationBoxButton = ({ id }) => {
    const { setNotificationData, buttonIcons } = useTodoContext();
    const { decline } = buttonIcons

    return (
        <button
            className='notification-box__button'
            onClick={ () => setNotificationData(prev => prev.filter(item => item.id !== id)) }
        >
            <ButtonIcon value={ decline }/>
        </button>
    )
}