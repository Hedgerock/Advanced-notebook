import './DivTag.css';

export const DivTag= ({ children }) => {
    return (
        <span
            className= 'notification-box__value'
        >
            { children }
        </span>
    )
}