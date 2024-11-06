import { useTodoFormContext } from "../../hooks";

export const useCreateNewInput = () => {
    const { setMainData, buttonIcons, mainData } = useTodoFormContext();
    const { create } = buttonIcons

    const actualClassName = mainData.some(el => el.notation?.status) 
    ? 'todo-form__add-btn todo-form__add-btn_alternate' 
    : 'todo-form__add-btn';

    const createNewInput = () => {

        setMainData(prev => {
            const newId = Date.now();
            return [...prev, { id: newId, content: '', 
                notation: {
                    status: false, 
                    value: [{ id: 1, text: '', count: { status: false, value: 1, derivative: 1 }, isActive: false }] 
                },
                count: { status: false, value: 1 }
            }]
        })

    }

    return { createNewInput, create, actualClassName }
}