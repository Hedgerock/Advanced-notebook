import { ButtonIcon } from '../../../ButtonIcon';
import { useInitNewSubTodo } from '../hooks';
import './AddSubTodo.css';
import { TodoFormProvider } from '../../../hoc';
import { TodoForm } from '../../../TodoForm';
import { useTodoItemContext } from '../../../hooks';
import { TodoItemParent } from '../../hoc';
import { TodoItem } from '../TodoItem';
import { TodoItemModal } from '../TodoItemModal';
import { initialNotation, todoFormInterface } from '../../../../data';

export const AddSubTodo = () => {
    const { 
        buttonIcons, 
        title,
        createSubTodoModal, 
        setCreateSubTodoModal, 
        newSubtodos, 
        setNewSubtodos,
        fullData,
        index,
        presentationData,
        isChangable,
        maxId
    } = useTodoItemContext();

    const { createSubTodo } = useInitNewSubTodo();
    const { create } = buttonIcons

    const closeModal = () => {
        setNewSubtodos([todoFormInterface({ id: maxId, content: '', notation: initialNotation })])
        setCreateSubTodoModal(false);
    }

    return (
        <>
            <div className="add-subtodo">
                <button
                    disabled = { !isChangable }
                    onClick={ () => {
                        if ( !isChangable ) return;
                        setCreateSubTodoModal(prev => !prev)
                    } }
                    className='add-subtodo__button'
                >
                    <ButtonIcon value = { create }/>
                </button>
            </div>

            { createSubTodoModal && 
                <TodoItemModal 
                    closeFunc={ closeModal } 
                    currentText = { `This is a creation modal of the "${ title }" subtodos` }
                >
                    <TodoFormProvider 
                        mainData={ newSubtodos } 
                        setMainData={ setNewSubtodos }
                        initDataFunction={ createSubTodo }
                        isDataWithTitle={ false }
                    >
                        <TodoForm />
                    </TodoFormProvider>
                        
                    <TodoItemParent 
                        data = { presentationData }
                        fullData = { fullData }
                        index = { index }
                        isChangable={ false }
                    >
                        <TodoItem />
                    </TodoItemParent>
                </TodoItemModal>
            }
        </>
    )
}