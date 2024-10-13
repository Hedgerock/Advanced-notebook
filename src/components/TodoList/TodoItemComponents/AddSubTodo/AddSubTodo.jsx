import { ButtonIcon } from '../../../ButtonIcon';
import { useInitNewSubTodo } from '../hooks';
import './AddSubTodo.css';
import { TodoFormProvider } from '../../../hoc';
import { TodoForm } from '../../../TodoForm';
import { SubtodoModalCloseBtn } from './SubtodoModalCloseBtn';
import { useTodoItemContext } from '../../../hooks';

export const AddSubTodo = () => {
    const { buttonIcons, title, createSubTodoModal, setCreateSubTodoModal, newSubtodos, setNewSubtodos } = useTodoItemContext();
    const { createSubTodo } = useInitNewSubTodo();
    const { create } = buttonIcons

    return (
        <>
            <div className="add-subtodo">
                <button
                    onClick={ () => setCreateSubTodoModal(prev => !prev) }
                    className='add-subtodo__button'
                >
                    <ButtonIcon value = { create }/>
                </button>
            </div>

            { createSubTodoModal && 
                <div className="create-subtodo-modal">
                    <div className="create-subtodo-modal-header">
                        <SubtodoModalCloseBtn />
                    </div>

                    <div className="create-subtodo-modal-form-box">
                        <TodoFormProvider 
                            mainData={ newSubtodos } 
                            setMainData={ setNewSubtodos }
                            initDataFunction={ createSubTodo }
                            isDataWithTitle={ false }
                        >
                            <TodoForm />
                        </TodoFormProvider>
                    </div>

                    <h1>This is a creation modal of { title }</h1>
                </div>
            }
        </>
    )
}