import { checkAllstatuses } from "../../utils"

export const getActualTextData = ({ data, id, filteredText, currentKey }) => {

    return data.map(item => {
        return (
            item.id === id
            ? {...item, text: filteredText, isDone: checkAllstatuses({ data: filteredText, key: currentKey })}
            : {...item}
        )
    })
}