import React from "react"
import { NotationsElementProvider } from "./NotationsElementProvider"

export const FilteredNotationsList = ({ children, data, isChangable = false, parentValue = null }) => {


    return (
        data.map(el => {
            return (
                <NotationsElementProvider 
                    key = { el.id } 
                    data = { el }
                    mainData = { data }
                    isChangable = { isChangable }
                    parentValue = { parentValue }
                >
                    { children }
                </NotationsElementProvider>
            )
        })
    )
}