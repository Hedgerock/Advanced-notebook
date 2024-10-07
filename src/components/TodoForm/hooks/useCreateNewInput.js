import { useTodoFormContext } from "../../hooks";

export const useCreateNewInput = () => {
    const { setContentInputData, buttonIcons } = useTodoFormContext();
    const { create } = buttonIcons

    const createNewInput = () => {

        setContentInputData(prev => {
            const newId = prev.map(item => item.id).sort((a,b) => b - a)[0] + 1;
            return [...prev, { id: newId, content: '', notation: {
                status: false, 
                value: [{ id: 1, text: '' }] 
            } }]
        })

    }

    return { createNewInput, create }
}