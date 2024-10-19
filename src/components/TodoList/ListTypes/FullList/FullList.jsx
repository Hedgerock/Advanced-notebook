



import { useTodoContext } from '../../../hooks';
import { TodoItemParent } from '../../hoc/TodoItemProvider';
import { TodoItem } from '../../TodoItemComponents'
import { getTodoData } from '../../TodoItemComponents/utils';

import './FullList.css';

export const FullList = () => {
    const { filteredTodo, searchParam, undeletedTodos } = useTodoContext();
    const actualTodo = searchParam ? filteredTodo : undeletedTodos

    const unfinishedTodos = getTodoData({ data: actualTodo, isReversed:false, filteredKey:'isDone', boolean:false })
    const finishedTodos = getTodoData({ data: actualTodo, isReversed:false, filteredKey:'isDone', boolean:true })

    return (
        <>
            { unfinishedTodos.map((item, index) =>(
                <TodoItemParent
                    data = { item }
                    key={ item.id } 
                    index = { index } 
                    fullData = { unfinishedTodos }
                    isChangable = { true }
                >
                    <TodoItem />
                </TodoItemParent>
            )) }

            { finishedTodos.length !== 0 && 
                <div className="finished-todos finshed-todos_item-box">
                    {finishedTodos.map((item, index) =>(
                        <TodoItemParent 
                            data = { item } 
                            key={ item.id } 
                            index = { index }
                            fullData = { finishedTodos }
                            isChangable = { true }
                        >
                            <TodoItem />
                        </TodoItemParent>
                    ))}
                </div>
            }
        </>
    )
}