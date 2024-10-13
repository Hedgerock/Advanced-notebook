import { useTodoFormContext } from "../../hooks";

export const useCreateNewInput = () => {
    const { setMainData, buttonIcons, mainData } = useTodoFormContext();
    const { create } = buttonIcons

    const actualClassName = mainData.some(el => el.notation?.status) 
    ? 'todo-form__add-btn todo-form__add-btn_alternate' 
    : 'todo-form__add-btn';

    const createNewInput = () => {

        setMainData(prev => {
            const newId = prev.map(item => item.id).sort((a,b) => b - a)[0] + 1;
            return [...prev, { id: newId, content: '', notation: {
                status: false, 
                value: [{ id: 1, text: '' }] 
            } }]
        })

    }

    return { createNewInput, create, actualClassName }
}