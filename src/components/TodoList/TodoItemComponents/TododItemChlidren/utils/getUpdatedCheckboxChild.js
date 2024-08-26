import { checkAllstatuses } from "../../utils";

export const getUpdatedCheckboxChild = ({ data, id, subtodoId, boolean }) => {

    return (
        data.map(item => {
            if (item.id === id) {
                const updatedText = item.text.map(el => {
                    return el.id === subtodoId
                        ? { ...el, status: !boolean }
                        : { ...el }
                });

                const allSubTodosDone = checkAllstatuses({ data: updatedText, key:'status' });
                
                return { ...item, isDone: allSubTodosDone, text: updatedText };
            }
            return item;
        })
    )
}