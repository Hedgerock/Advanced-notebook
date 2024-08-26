export const checkAllstatuses = ({ data, key }) => {
    return data.every(el => el[key])
}