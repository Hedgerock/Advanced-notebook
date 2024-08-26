

import { useTodoContext } from "../../hooks";
import { TodoItemParent } from "../hoc";
import { TodoItem } from '../TodoItemComponents';
import { getTodoData } from "../TodoItemComponents/utils";
import './FullList.css';

export const FullList = () => {
    const { todo, filteredTodo, searchParam } = useTodoContext();
    const actualTodo = searchParam ? filteredTodo : todo

    const unfinishedTodos = getTodoData({ data: actualTodo, isReversed:false, filteredKey:'isDone', boolean:false })
    const finishedTodos = getTodoData({ data: actualTodo, isReversed:false, filteredKey:'isDone', boolean:true })

    return (
        <>
            { unfinishedTodos.map(item =>(
                <TodoItemParent data = { item } key={ item.id }>
                    <TodoItem />
                </TodoItemParent>
            )) }

            { finishedTodos.length !== 0 && 
                <div className="finished-todos finshed-todos_item-box">
                    {finishedTodos.map(item =>(
                        <TodoItemParent data = { item } key={ item.id }>
                            <TodoItem />
                        </TodoItemParent>
                    ))}
                </div>
            }
        </>
    )
}