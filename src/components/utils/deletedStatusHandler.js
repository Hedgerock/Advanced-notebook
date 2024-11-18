export const deletedStatusHandler = ({ data, id, deleted: isDeleted }) => {

    return data.map(el => el.id === id 
        ? {...el, 
            deleted: isDeleted, 
            isDone: el.text.every(val => val.status), 
            text: el.text.map(item => ({...item, deleted: isDeleted}))
        } 
        : { ...el }
    )
}