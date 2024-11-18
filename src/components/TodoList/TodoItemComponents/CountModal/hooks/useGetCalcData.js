import { useTodoItemContext } from "../../../../hooks";

export const useGetCalcData = () => {
    const { filteredSubTodos, calcObject } = useTodoItemContext();

    const currentData = filteredSubTodos
    .sort((a,b) => b.count.value === a.count.value 
        ? a.text.localeCompare(b.text) 
        : b.count.value - a.count.value
    )

    const currentTotal = Object.entries(calcObject)
    .filter(([title, value]) => title && value)
    .sort(([aTitle, aValue], [ bTitle, bValue ]) => bValue === aValue 
        ? aTitle.localeCompare(bTitle) 
        : bValue - aValue
    )

    return { currentTotal, currentData}
}