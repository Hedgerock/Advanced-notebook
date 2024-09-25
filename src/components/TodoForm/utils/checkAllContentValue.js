export const checkAllContentValue = ({ data, key }) => {

    return !data.every(el => el[key])
}