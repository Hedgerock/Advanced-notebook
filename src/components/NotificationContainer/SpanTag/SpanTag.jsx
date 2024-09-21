import './SpanTag.css';

export const SpanTag = ({ children }) => {
    return (
        <span
            className= 'notification-box__value'
        >{ children }</span>
    )
}