import React from "react"
import { NotationsElementProvider } from "./NotationsElementProvider"

export const FilteredNotationsList = ({ children, data }) => {


    return (
        data.map(el => {
            return (
                <NotationsElementProvider key = { el.id } data = { el }>
                    { children }
                </NotationsElementProvider>
            )
        })
    )
}