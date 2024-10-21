import { TodoChildInput } from "./TodoItemTextBlockElements/TodoChildInput";
import './TodoItemTextBlock.css';
import { useFindChildren, useMoveToChild, useTodoItemChildContext, useUpdateCurrentSubTodo } from "../hooks";
import { SwapBox, TodoChildCurrentNumber, TodoChildDelButton, TodoChildItemInput, TodoChildItemP, Notations  } from "./TodoItemTextBlockElements";
import { ChangeBox } from "../ChangeBox";
import { TodoItemModal } from "../../TodoItemModal";
import { TodoFormProvider } from "../../../../hoc";
import { TodoForm } from "../../../../TodoForm";
import { TodoItemTextBlockModal } from "./TodoItemTextBlockModal";

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
                <TodoItemModal 
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

                    <TodoItemTextBlockModal />

                </TodoItemModal>
            }
        </>
    )
}