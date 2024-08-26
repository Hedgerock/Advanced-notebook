import { ChangeBox } from "../../ChangeBox";
import { TodoChildInput } from "./TodoItemTextBlockElements/TodoChildInput";
import './TodoItemTextBlock.css';
import { useTodoItemChildContext } from "../hooks";
import { TodoChildItemP } from "./TodoItemTextBlockElements/TodoChildItemP";
import { TodoChildItemInput } from "./TodoItemTextBlockElements/TodoChildItemInput";
import { TodoChildDelButton } from "./TodoItemTextBlockElements/TodoChildDelButton";
import { TodoChildCurrentNumber } from "./TodoItemTextBlockElements/TodoChildCurrentNumber";

export const TodoItemTextBlock = () => {
    const { changeStatus } = useTodoItemChildContext();

    return (
        <div 
            className="todo-item-text-block" 
        >
            <TodoChildInput/>

            <TodoChildCurrentNumber />

            <ChangeBox />
            
            {!changeStatus
                ? <TodoChildItemP />
                : <TodoChildItemInput />
            }

            <TodoChildDelButton />
        </div>
    )
}