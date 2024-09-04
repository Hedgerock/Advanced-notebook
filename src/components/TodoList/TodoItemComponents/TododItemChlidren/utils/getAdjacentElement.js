export const getAdjacentElement = ({ type, index, data }) => {
    const selection = {
        'previous': index - 1,
        'next': index + 1
    }

    const currentIndex =  selection[type]

    return (
        data[currentIndex] 
            ? data[currentIndex] 
            : null
    )
}