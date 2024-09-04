export const getSwapValue = ({ data, key, currentValue, newValue, todoId, subtodoId, adjacentId }) => {
    return data.map(item => {
        return item.id === todoId
            ? {...item, text: item.text.map((el) => {
                const { id } = el;

                if (id === subtodoId) {
                    return {...el, [key]: newValue[key]}
                }

                if (id === adjacentId) {
                    return {...el, [key]: currentValue[key] }
                }

                return {...el}
            })}

            : {...item}
    })
}