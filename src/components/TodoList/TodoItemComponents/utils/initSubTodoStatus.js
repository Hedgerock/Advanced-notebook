export const initSubTodoStatus = ({ arr, boolean }) => {
    return arr.filter(el => !el.deleted).map(el => ({...el, status: boolean}))
}