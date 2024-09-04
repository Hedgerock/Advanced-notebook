export const getFilteredSearchData = ({ searchParam, data, key }) => {

    return data.filter(el => {
        const elementValue = el[key].toLowerCase();
        const searchParamValue = searchParam?.toLowerCase().trim();
    
        return elementValue.includes(searchParamValue)}
    )
}