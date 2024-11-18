



import { useTodoContext } from '../../../hooks';
import { getTodoData } from '../../TodoItemComponents/utils';

import './FullList.css';
import { TodoParent } from './TodoParent';

export const FullList = () => {
    const { filteredTodo, searchParam, undeletedTodos } = useTodoContext();
    const actualTodo = searchParam ? filteredTodo : undeletedTodos

    const unfinishedTodos = getTodoData({ data: actualTodo, isReversed:false, filteredKey:'isDone', boolean:false })
    const finishedTodos = getTodoData({ data: actualTodo, isReversed:false, filteredKey:'isDone', boolean:true })

    const isNotEmpty = !!finishedTodos.length;

    return (
        <>
            <TodoParent 
                data = { unfinishedTodos }
            />

            { isNotEmpty && 
                <div 
                    className="finished-todos finshed-todos_item-box"
                >
                    <TodoParent 
                        data = { finishedTodos }
                    />
                </div>
            }
        </>
    )
}