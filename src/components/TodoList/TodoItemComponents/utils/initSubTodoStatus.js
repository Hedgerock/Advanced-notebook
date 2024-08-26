export const initSubTodoStatus = ({ arr, boolean }) => {
    return arr.map(el => ({...el, status: boolean}))
}