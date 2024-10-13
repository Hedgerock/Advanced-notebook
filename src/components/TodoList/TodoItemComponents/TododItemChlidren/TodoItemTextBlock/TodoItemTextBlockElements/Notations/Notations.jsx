import { useTodoItemChildContext } from "../../../hooks";
import './Notations.css';

export const Notations = () => {
    const { notation } = useTodoItemChildContext();

    const filteredNotation = Array.isArray(notation) 
        ? notation.filter(el => el.text) 
        : [{ id: 1, text: notation }].filter(el => el.text);

    return (
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
    )
}