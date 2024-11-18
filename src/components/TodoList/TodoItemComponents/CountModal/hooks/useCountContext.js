import { useContext } from "react"
import { countContext } from "../context"

export const useCountContext = () => {

    return useContext(countContext)
}