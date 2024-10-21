import { useContext } from "react"
import { searchByNotesContext } from "../../context/searchByNotesContext"

export const useSearchByNotesContext = () => {

    return useContext(searchByNotesContext);
}