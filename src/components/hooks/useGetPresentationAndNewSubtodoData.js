import { useEffect, useState } from "react";
import { initialNotation, todoFormInterface } from "../../data";

export const useGetPresentationAndNewSubtodoData = ({ data, index }) => {
    const { text } = data;

    const maxId = Math.max.apply(null, text.map(item => item.id)) + 1;
    const [ newSubtodos, setNewSubtodos ] = useState([todoFormInterface({ id: maxId, content: '', notation: initialNotation })])
    const [ presentationData, setPresentationData ] = useState(data);
    const newOrder = Math.max(...presentationData.text.map(item => item.order)) + 1;

    useEffect(() => {
        setPresentationData(prev => {
            const newData = newSubtodos.map(el => ({
                id: el.id,
                status: false,
                text: el.content,
                deleted: false,
                order: newOrder,
                notation: el.notation.value
            }));
    
            const updatedText = prev.text.map(val => {
                const newItem = newData.find(el => el.id === val.id);
                return newItem ? { ...val, text: newItem.text, notation: newItem.notation } : val;
            });
    
            const newItems = newData.filter(el => !prev.text.some(val => val.id === el.id));

            const actualId = data.text.map(el => el.id).concat(newSubtodos.map(el => el.id));
            const filteredText = [...updatedText, ...newItems].filter(el => actualId.includes(el.id));

            return {
                ...prev,
                text: filteredText
            };
        });
    }, [newSubtodos, index, data, newOrder]);

    return { newSubtodos, setNewSubtodos, presentationData, setPresentationData, maxId }
}