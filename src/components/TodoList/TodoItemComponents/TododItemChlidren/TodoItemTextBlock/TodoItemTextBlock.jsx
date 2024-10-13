import { TodoChildInput } from "./TodoItemTextBlockElements/TodoChildInput";
import './TodoItemTextBlock.css';
import { useFindChildren, useTodoItemChildContext } from "../hooks";
import { TodoChildItemP } from "./TodoItemTextBlockElements/TodoChildItemP";
import { TodoChildItemInput } from "./TodoItemTextBlockElements/TodoChildItemInput";
import { TodoChildDelButton } from "./TodoItemTextBlockElements/TodoChildDelButton";
import { TodoChildCurrentNumber } from "./TodoItemTextBlockElements/TodoChildCurrentNumber";
import { SwapBox } from "./TodoItemTextBlockElements";
import { ChangeBox } from "../ChangeBox";
import { Notations } from "./TodoItemTextBlockElements/Notations";

export const TodoItemTextBlock = () => {
    const { changeStatus } = useTodoItemChildContext();
    const { childrenClassName } = useFindChildren();

    return (
        <div 
            className={ childrenClassName } 
        >
            <SwapBox />

            <TodoChildInput/>

            <TodoChildCurrentNumber />

            <ChangeBox />
            
            <div className="text-box-container">
                <Notations />
                {!changeStatus
                    ? <TodoChildItemP />
                    : <TodoChildItemInput />
                }
            </div>

            <TodoChildDelButton />
        </div>
    )
}