

import './TodoContstructorModal.css';
import { TodoContstructorModalCloseButton } from './TodoContstructorModalCloseButton';

export const TodoContstructorModal = ({ children, currentText, closeFunc }) => {
    const closeTitle = `Close ${ currentText.split('the')[1] } modal`;

    return (
        <>
            <div 
                className="modal-layout"
                title= { closeTitle }
                onClick={ closeFunc }
            ></div>

            <div className="todo-constructor-modal">
                <div className="todo-constructor-modal-header">
                    <h3 
                        className='todo-constructor-modal-header__title'  
                    >
                        { currentText }
                    </h3>

                    <TodoContstructorModalCloseButton 
                        closeFunc = { closeFunc }
                    />
                </div>

                <div className="todo-constructor-modal-form-box">
                    { children }
                </div>
            </div>
        </>
    )
}