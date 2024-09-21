export const deletedStatusHandler = ({ data, id, isDeleted }) => {

    return data.map(el => el.id === id 
        ? {...el, deleted: isDeleted, text: el.text.map(item => ({...item, deleted: isDeleted}))} 
        : { ...el }
    )
}