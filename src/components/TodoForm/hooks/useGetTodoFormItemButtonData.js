import { useTodoFormItemContext } from "../../hooks/useTodoForItemContext";

export const useGetTodoFormItemButtonData = () => {
    const { data, buttonIcons, setMainData, mainData } = useTodoFormItemContext();
    const { id, notation } = data;
    const { delete: currentValue } = buttonIcons;

    const a = notation?.status 
        ? `todo-form-item__button todo-form-item__button_updated${ data.notation.value.length === 1 ? `-single${data.count.status ? '-counted' : ''}` : '' }` 
        : 'todo-form-item__button todo-form-item__button_inactive-notation'
    
    const b = mainData.some(el => el.notation.status) ? 'todo-form-item__button_inactive-notation-through-the-active' : ''

    const actualClassName = `${ a } ${ b }`

    const deleteSubTodo = () => {
        setMainData(prev => {
            return prev.filter(val => val.id !== id)
        })
    }

    return { actualClassName, currentValue, deleteSubTodo }
}