import { TodoChildInput } from "./TodoItemTextBlockElements/TodoChildInput";
import './TodoItemTextBlock.css';
import { useFindChildren, useMoveToChild, useTodoItemChildContext, useUpdateCurrentSubTodo } from "../hooks";
import { SwapBox, TodoChildCurrentNumber, TodoChildDelButton, TodoChildItemInput, TodoChildItemP, Notations  } from "./TodoItemTextBlockElements";
import { ChangeBox } from "../ChangeBox";
import { TodoFormProvider } from "../../../../hoc";
import { TodoForm } from "../../../../TodoForm";
import { TodoItemTextBlockModal } from "./TodoItemTextBlockModal";
import { TodoContstructorModal } from "../../../../TodoConsturctorModal";

export const TodoItemTextBlock = () => {
    const { 
        changeStatus,
        isChangable, 
        editNotationHandler, 
        setNotations,
        notations,
        subtodoText,
    } = useTodoItemChildContext();
    const { childrenClassName } = useFindChildren();
    const { destination } = useMoveToChild();
    const { initCloseModal, updateCurrentSubTodo } = useUpdateCurrentSubTodo();
    const isNotSingleNotation = notations[0].notation.value.length > 1

    return (
        <>
            <div 
                className={ childrenClassName }
                ref = { destination }
            >
                <SwapBox />

                { isChangable && <TodoChildInput/> }

                <TodoChildCurrentNumber />

                { isChangable && <ChangeBox /> }
                
                <div className="text-box-container">
                    <Notations />
                    {!changeStatus
                        ? <TodoChildItemP />
                        : <TodoChildItemInput />
                    }
                </div>
                <TodoChildDelButton />
            </div>
            { editNotationHandler &&
                <TodoContstructorModal
                    closeFunc = { initCloseModal } 
                    currentText={ `This is edition modal of the "${ subtodoText }" notations` }
                >
                    <TodoFormProvider 
                        mainData={ notations } 
                        setMainData={ setNotations }
                        initDataFunction={ updateCurrentSubTodo }
                        isDataWithTitle={ false }
                        isCurrentChild = { true }
                        isCleanAfterCreation = { false }
                    >
                        <TodoForm />
                    </TodoFormProvider>

                    { isNotSingleNotation && 
                        <TodoItemTextBlockModal /> 
                    }

                </TodoContstructorModal>
            }
        </>
    )
}