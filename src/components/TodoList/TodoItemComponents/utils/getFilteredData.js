export const getFilteredData = ({ data, id }) => {

    return data.filter(item => item.id !== id)
}