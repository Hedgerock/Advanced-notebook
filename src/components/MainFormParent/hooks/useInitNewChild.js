import { initialNotation, newTodoInterface, todoFormInterface } from "../../../data";
import { useTodoContext } from "../../hooks";
import { checkFormForNotations } from "../../utils";

export const useInitNewChild = () => {
    const { contentInputData, setContentInputData, todo, setTodo } = useTodoContext();

    const initNewData = () => {

        setContentInputData(prev => {
          const newId = Date.now();
          return [...prev, { 
                id: newId, 
                contentValue: [todoFormInterface({ id: newId + 1, content: '', notation: initialNotation })], 
                isReady: false,
                title: '',
                currentTodoText: '' 
            }]
        })
  
    }

    const initNewTodos = () => {

        setTodo(prev => {
            return [...prev, ...contentInputData.map((val, index) => {
                return newTodoInterface({
                    id: val.id,
                    textData: val.contentValue,
                    title: val.title,
                    isDone: false,
                    orderData: todo,
                    deleted: false,
                    elIndex: index
                })
            })]
        })
        const initialData = [todoFormInterface({ id: Date.now(), content: '', notation: initialNotation })];
        setContentInputData([{ id: Date.now(), contentValue: initialData, isReady: false, title: '', currentTodoText: ''  }])

    }

    const actualTitle = contentInputData.map(el => el.currentTodoText).join('\n\n');

    const isFits = checkFormForNotations({ form: contentInputData }) && contentInputData.length > 1 

    const actualClassName = `todo-form-box ${ isFits ? 'todo-form-box_extended' : '' }`

    return { initNewData, actualTitle, actualClassName, initNewTodos }
}