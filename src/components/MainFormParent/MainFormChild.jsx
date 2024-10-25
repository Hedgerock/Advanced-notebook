import { useInitNewTodo, useTodoContext } from "../hooks";
import { TodoFormProvider } from "../hoc";
import { TodoForm } from "../TodoForm";
import { useGetChildButtons } from "./hooks";
import { TodoFormChildHeader } from "./TodoFormChildHeader";

export const MainFormChild = ({ data, setData, index }) => {
    const { contentInputData } = useTodoContext();
    const { initNewTodo } = useInitNewTodo();
    const { buttons, curData, setCurData } = useGetChildButtons({ data, setData, index })

    const actualClassName = `todo-form-container ${ contentInputData.length > 1 ? 'todo-form-container_extended': '' }`

    return (
        <div className={ actualClassName }>

            { contentInputData.length > 1 && 
                <TodoFormChildHeader 
                    data = { data } 
                    buttons = { buttons }
                />
            }

            <TodoFormProvider
                mainData={ curData }
                mainId = { data.id }
                initDataFunction = { initNewTodo }
                setMainData={ setCurData }
                isDataWithTitle = { true }
                isNotChildElement = { contentInputData.length === 1 }
            >
                <TodoForm />
            </TodoFormProvider>
        </div>
    )
}