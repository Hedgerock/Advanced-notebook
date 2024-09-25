import { useTitleBoxContext } from "../../../hooks";

export const useInitConfirmOrDecline = () => {
    const { setEditStatus, titleValue, setTitleValue, updateTitle, setTodo, id, title, buttonIcons } = useTitleBoxContext();
    const { confirm, decline } = buttonIcons

    const initConfirm = () => {

        setTodo(prev => updateTitle({ data: prev }))
        setEditStatus(false)
        setTitleValue(titleValue || `Todo collection number ${ id }`)
    }

    const initDecline = () => {

        setEditStatus(false)
        setTitleValue(title)
    }

    return { initDecline, initConfirm, confirm, decline }
}