export const checkAllstatuses = ({ data, key }) => {
    return data.filter(el => !el.deleted).every(el => el[key])
}