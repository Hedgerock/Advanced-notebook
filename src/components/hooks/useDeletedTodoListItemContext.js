import { useContext } from "react"
import { deletedTodoListItemContext } from "../../context"

export const useDeletedTodoListItemContext = () => {

    return useContext(deletedTodoListItemContext);
}