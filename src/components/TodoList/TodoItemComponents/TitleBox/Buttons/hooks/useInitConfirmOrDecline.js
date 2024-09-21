import { useTitleBoxContext } from "../../../hooks";

export const useInitConfirmOrDecline = () => {
    const { setEditStatus, titleValue, setTitleValue, updateTitle, setTodo, id, title } = useTitleBoxContext();

    const initConfirm = () => {

        setTodo(prev => updateTitle({ data: prev }))
        setEditStatus(false)
        setTitleValue(titleValue || `Todo collection number ${ id }`)
    }

    const initDecline = () => {

        setEditStatus(false)
        setTitleValue(title)
    }

    return { initDecline, initConfirm }
}