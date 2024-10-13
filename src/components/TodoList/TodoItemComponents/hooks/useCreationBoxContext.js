import { useContext } from "react"
import { creationBoxContext } from "../../../../context"

export const useCreationBoxContext = () => {

    return useContext(creationBoxContext);
}