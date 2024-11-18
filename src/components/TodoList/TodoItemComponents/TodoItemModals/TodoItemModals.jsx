import { CalcModal } from "./CalcModal";
import { NewSubTodoModal } from "./NewSubTodoModal";

export const TodoItemModals = ({ modalData, calcModal }) => {
    return (
        <>
            <NewSubTodoModal
                modalData={ modalData }
            />

            <CalcModal 
                modalData = { modalData } 
                calcModal = { calcModal }
            />
        </>
    )
}