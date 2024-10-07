import { TodoChildInput } from "./TodoItemTextBlockElements/TodoChildInput";
import './TodoItemTextBlock.css';
import { useFindChildren, useTodoItemChildContext } from "../hooks";
import { TodoChildItemP } from "./TodoItemTextBlockElements/TodoChildItemP";
import { TodoChildItemInput } from "./TodoItemTextBlockElements/TodoChildItemInput";
import { TodoChildDelButton } from "./TodoItemTextBlockElements/TodoChildDelButton";
import { TodoChildCurrentNumber } from "./TodoItemTextBlockElements/TodoChildCurrentNumber";
import { SwapBox } from "./TodoItemTextBlockElements";
import { ChangeBox } from "../ChangeBox";

export const TodoItemTextBlock = () => {
    const { changeStatus, notation } = useTodoItemChildContext();
    const { childrenClassName } = useFindChildren();

    const filteredNotation = Array.isArray(notation) 
        ? notation.filter(el => el.text) 
        : [{ id: 1, text: notation }].filter(el => el.text);

    return (
        <div 
            className={ childrenClassName } 
        >
            <SwapBox />

            <TodoChildInput/>

            <TodoChildCurrentNumber />

            <ChangeBox />
            
            <div className="text-box-container">
                <div className="notations">
                    {filteredNotation.length > 0 &&
                        filteredNotation.map(el => {
                            const { id, text } = el;
                            
                            return (
                            <span
                                key = { id }
                                className="todo-item__text todo-item__text_notation"
                                title={ `Notation: ${ text }` }
                            >
                                { text }
                            </span>
                            )
                        })
                    }
                </div>
                {!changeStatus
                    ? <TodoChildItemP />
                    : <TodoChildItemInput />
                }
            </div>

            <TodoChildDelButton />
        </div>
    )
}