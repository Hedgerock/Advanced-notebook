import { useTodoContext } from '../hooks';
import './Modal.css';

export const Modal = ({ children }) => {
    const { modal, isNotEmpty } = useTodoContext();

    return (modal && isNotEmpty) &&
    <div className="modal">
        { children }
    </div>
}