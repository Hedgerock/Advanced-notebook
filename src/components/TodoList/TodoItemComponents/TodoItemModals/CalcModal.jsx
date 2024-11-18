import { TodoContstructorModal } from "../../../TodoConsturctorModal"
import { CountBox } from "../CountModal"
import { CountContainer } from "../CountModal/hoc"

export const CalcModal = ({  modalData, calcModal }) => {

    return calcModal &&
    <TodoContstructorModal
        closeFunc={ modalData.calculation.close } 
        currentText = { modalData.calculation.title }
    >

        <CountContainer>

            <CountBox />

        </CountContainer>

    </TodoContstructorModal>
}