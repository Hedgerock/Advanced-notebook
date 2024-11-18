import { useEffect, useState } from "react";
import { initialNotation, todoFormInterface } from "../../data";
import { useTodoContext } from "./useTodoContext";

export const useGetPresentationAndNewSubtodoData = ({ data, index }) => {
    const { todo } = useTodoContext();
    const maxId = Date.now();
    const [ newSubtodos, setNewSubtodos ] = useState([todoFormInterface({ id: maxId, content: '', notation: initialNotation })])
    const [ presentationData, setPresentationData ] = useState(data);
    const newOrder = data.text.length + 1

    useEffect(() => {
        setPresentationData(data)
    }, [data])

    useEffect(() => {
        setPresentationData(prev => {
            const newData = newSubtodos.map((el, index) => ({
                id: el.id,
                status: false,
                text: el.content,
                deleted: false,
                order: newOrder + index,
                notation: el.notation.value,
                count: { status: el.count?.status, value: el.count?.value }
            }));
    
            const updatedText = prev.text.map(val => {
                const newItem = newData.find(el => el.id === val.id);
                return newItem 
                    ? { ...val, 
                        text: newItem.text, 
                        notation: newItem.notation, 
                        count: { status: newItem.count.status, value: newItem.count.value } 
                    } 
                    : val;
            });
    
            const newItems = newData.filter(el => !prev.text.some(val => val.id === el.id));

            const actualId = data.text.map(el => el.id).concat(newSubtodos.map(el => el.id));
            const filteredText = [...updatedText, ...newItems].filter(el => actualId.includes(el.id));

            return {
                ...prev,
                text: filteredText
            };
        });
    }, [newSubtodos, index, data, newOrder, todo]);

    return { newSubtodos, setNewSubtodos, presentationData, setPresentationData, maxId }
}