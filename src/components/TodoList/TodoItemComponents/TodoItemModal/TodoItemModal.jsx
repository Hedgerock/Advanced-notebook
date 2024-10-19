import { SubtodoModalCloseBtn } from "../AddSubTodo"
import './TodoItemModal.css';

export const TodoItemModal = ({ children, currentText, closeFunc }) => {

    return (
        <div className="create-subtodo-modal">
            <div className="create-subtodo-modal-header">
                <h3 
                    className='create-subtodo-modal-header__title'  
                >
                    { currentText }
                </h3>
                <SubtodoModalCloseBtn closeFunc = { closeFunc }/>
            </div>

            <div className="create-subtodo-modal-form-box">
                { children }
            </div>
        </div>
    )
}