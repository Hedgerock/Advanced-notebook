import { useContext } from "react"
import { titleBoxContext } from "../TitleBox/context"

export const useTitleBoxContext = () => {

    return useContext(titleBoxContext);
}