export const getTodoData = ({ data, isReversed, filteredKey, boolean }) => {
    const myData = isReversed ? [...data].reverse() : [...data]

    return myData.filter(item => boolean ? item[filteredKey] : !item[filteredKey]);
}