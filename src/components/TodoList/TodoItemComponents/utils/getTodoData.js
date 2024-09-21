export const getTodoData = ({ data, isReversed, filteredKey, boolean }) => {
    const filteredValue = [...data].filter(item => !item.deleted);
    const myData = isReversed ? filteredValue.reverse() : filteredValue

    return myData.filter(item => boolean ? item[filteredKey] : !item[filteredKey]).sort((a,b) => Number(a.order) - Number(b.order));
}