export const getUpdatedTodo = ({ data, id, newData, boolean }) => {

    return data.map(el => {
        return (
            el.id === id
                ? {...el, text: newData, isDone: boolean}
                : { ...el }
        )
    })
}