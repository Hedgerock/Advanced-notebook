export const useGetCalculations = ({ text }) => {
    const filteredSubTodos = text.filter(el => el.count?.status && !el.deleted && !el.status);

    const obj = {};

    filteredSubTodos.forEach(el => {
        el.notation.forEach(val => {
            const key = val.text.toLowerCase();

            obj[key] ? obj[key]+= val.count.derivative : obj[key] = val.count.derivative
        })
        const key = el.text.toLowerCase();

        obj[key] ? obj[key]+= el.count.value : obj[key] = el.count.value
    })

    return { filteredSubTodos, calcObject: obj }
}