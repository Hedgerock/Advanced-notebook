import { newTodoTextInterface } from "./newTodoTextInterface";

export const newTodoInterface = ({ id, textData, title, isDone, orderData, deleted }) => {
    const arr = orderData.map(val => val.order);
    const maxOrder = Math.max.apply(null, arr);

    const textVal = textData.map((el, index) => {
        const newId = id + id + index;
        return newTodoTextInterface({
            id: newId,
            status: false,
            text: el.content, 
            order: 1 + index,
            deleted: false,
            notation: el.notation.value
        })
    })

    return {
        id,
        text: textVal,
        title,
        isDone,
        order: orderData.length ? maxOrder + 1 : 1,
        deleted
    }
}