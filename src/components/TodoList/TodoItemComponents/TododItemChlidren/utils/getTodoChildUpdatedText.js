export const getTodoChildUpdatedText = ({ data, id, subtodoId, e }) => {
    return data.map(item => {
        return (
            item.id === id
                ? {...item, text: item.text.map(el => {
                    return (
                        el.id === subtodoId
                            ? {...el, text: e.target.value}
                            : { ...el }
                    )
                })}
                : {...item}
        )
    })
}