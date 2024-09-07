import { ChangeBox } from "../../ChangeBox";
import { TodoChildInput } from "./TodoItemTextBlockElements/TodoChildInput";
import './TodoItemTextBlock.css';
import { useTodoItemChildContext } from "../hooks";
import { TodoChildItemP } from "./TodoItemTextBlockElements/TodoChildItemP";
import { TodoChildItemInput } from "./TodoItemTextBlockElements/TodoChildItemInput";
import { TodoChildDelButton } from "./TodoItemTextBlockElements/TodoChildDelButton";
import { TodoChildCurrentNumber } from "./TodoItemTextBlockElements/TodoChildCurrentNumber";
import { SwapBox } from "./TodoItemTextBlockElements";

export const TodoItemTextBlock = () => {
    const { changeStatus, lastChildChildren, firstChildChildren } = useTodoItemChildContext();
    const childrenClassName = `todo-item-text-block ${ firstChildChildren } ${ lastChildChildren }`

    return (
        <div 
            className={ childrenClassName } 
        >
            <SwapBox />

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