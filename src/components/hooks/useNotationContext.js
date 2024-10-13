import { useContext } from "react"
import { notationContext } from "../../context"

export const useNotationContext = () => {
    
    return useContext(notationContext);
}