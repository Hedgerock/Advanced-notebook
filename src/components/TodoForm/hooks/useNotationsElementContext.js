import { useContext } from "react"
import { notationsElementContext } from "../../../context"

export const useNotationsElementContext = () => {

    return useContext(notationsElementContext);
}