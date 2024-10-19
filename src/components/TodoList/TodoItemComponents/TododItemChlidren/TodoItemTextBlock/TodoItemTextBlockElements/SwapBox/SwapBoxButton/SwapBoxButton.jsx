import { useTodoItemChildContext } from "../../../../hooks";

import './SwapBoxButton.css';

export const SwapBoxButton = ({ children, func, keyButton }) => {
    const { subtodoText, isChangable } = useTodoItemChildContext();

    return (
        <button
            onClick={ func }
            disabled = { !isChangable }
            title={ isChangable ? `Move ${ subtodoText } ${ keyButton }` : "Swap option is not available"}
            className={ `todo-item-text-block__button todo-item-text-block__button_${ keyButton }` }
        >{ children }
        </button> 
    )
}