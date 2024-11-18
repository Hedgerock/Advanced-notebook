import { TodoFormProvider } from "../../../hoc";
import { useTodoItemContext } from "../../../hooks";
import { TodoContstructorModal } from "../../../TodoConsturctorModal"
import { TodoForm } from "../../../TodoForm";
import { TodoItemParent } from "../../hoc";
import { useInitNewSubTodo } from "../hooks";
import { TodoItem } from "../TodoItem";

export const NewSubTodoModal = ({ modalData }) => {
    const { 
        createSubTodoModal, 
        newSubtodos, 
        setNewSubtodos,
        fullData,
        index,
        presentationData,
    } = useTodoItemContext();

    const isSingleNotation = newSubtodos.some(el => el.notation.value.length === 1 && el.count.status && el.notation.status);
    const { createSubTodo } = useInitNewSubTodo();

    return createSubTodoModal && 
    <TodoContstructorModal
        closeFunc={ modalData.subTodo.close } 
        currentText = { modalData.subTodo.title }
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
            isSingleNotation = { isSingleNotation }
        >
            <TodoItem />
        </TodoItemParent>
    </TodoContstructorModal>
}