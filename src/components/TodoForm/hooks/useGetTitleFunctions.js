import { useEffect } from "react"
import { useTodoContext, useTodoFormContext } from "../../hooks";
import { useCustomTodoData } from "./useCustomTodoData";


export const useGetTitleFunctions = () => {
    const { title, setValue, enterEvent, mainData, isNotChildElement, mainId, altTitle, isNotated } = useTodoFormContext();
    const { setContentInputData } = useTodoContext();
    const { initCreatingTodoProcess } = useCustomTodoData();

    useEffect(() => {
        if (!isNotChildElement) {
            setContentInputData(prev => {
                return prev.map(el => {
                    return el.id === mainId
                        ? {...el, title: title || altTitle}
                        : el
                })
            })
        }
    }, [isNotChildElement, mainId, setContentInputData, title, altTitle])

    const valueSetter = (e) => {
        setValue(prev => {
            return {...prev, title: e.target.value}
        })
    }

    const initEnterEvent = (event) => {
        enterEvent(event, mainData, initCreatingTodoProcess)
    }

    const a = 'todo-form__input';
    const b = isNotated && isNotChildElement ? 'todo-form__input_title-with-notations' : 'todo-form__input_title';
    const c = !isNotChildElement ? 'todo-form__input_title-as-child' : '';
    const actualClassName = `${ a } ${ b } ${ c }`.split(' ').filter(el => el).join(' ');

    return { valueSetter, initEnterEvent, title, actualClassName }
}