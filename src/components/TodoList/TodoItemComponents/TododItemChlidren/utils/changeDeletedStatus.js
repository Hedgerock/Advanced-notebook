export const changeDeletedStatus = ({ data, id, boolean }) => {

    return data.map(el => el.id === id ? { ...el, deleted: boolean } : {...el} )
}