import { TodoItemParent } from "../../hoc"
import { TodoItem } from "../../TodoItemComponents"

export const TodoParent = ({ data }) => {


    return data.map((item, index) => (
        <TodoItemParent
            data = { item }
            key={ item.id } 
            index = { index } 
            fullData = { data }
        >
            <TodoItem />
        </TodoItemParent>
    ))

}