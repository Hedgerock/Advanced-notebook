import { useContext } from "react"
import { modalBoxesContext } from "../../context"

export const useModalBoxesContext = () => {

    return useContext(modalBoxesContext);
}