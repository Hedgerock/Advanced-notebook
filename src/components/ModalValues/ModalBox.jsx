import { useModalBoxesContext } from '../hooks';
import './ModalBox.css';

export const ModalBox = ({ children }) => {
    const { title } = useModalBoxesContext();

    return (
        <div className="modal-box" title={ title }>
            { children }
        </div>
    )
}