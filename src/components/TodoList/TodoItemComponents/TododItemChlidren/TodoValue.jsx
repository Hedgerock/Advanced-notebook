import { useTodoItemContext } from "../../../hooks";
import { TodoItemChildProvider } from "./hoc";
import { TodoItemTextBlock } from "./TodoItemTextBlock";

export const TodoValue = () => {
    const { finishedTodos, unfinishedTodos } = useTodoItemContext();


    return (
        <div className="todo-text">
            {
                unfinishedTodos?.map((el, index) => (
                    <TodoItemChildProvider 
                        key = { el.id } 
                        info = { el }
                        childrenFullList = { unfinishedTodos }
                        childIndex = { index }
                    >
                        <TodoItemTextBlock/>
                    </TodoItemChildProvider>
                ))
            }

            { finishedTodos.length !== 0 && 
                <div className="finished-todos finished-todos_item-box">
                    {finishedTodos?.map((el, index) => (
                        <TodoItemChildProvider 
                            key = { el.id } 
                            info = { el }
                            childrenFullList = { finishedTodos }
                            childIndex = { index }
                        >
                            <TodoItemTextBlock/>
                        </TodoItemChildProvider>
                    ))}
                </div>
            }
        </div>
    )
}