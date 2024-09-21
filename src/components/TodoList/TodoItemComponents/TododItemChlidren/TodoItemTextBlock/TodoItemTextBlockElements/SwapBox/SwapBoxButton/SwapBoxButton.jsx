import { useTodoItemChildContext } from "../../../../hooks";

import './SwapBoxButton.css';

export const SwapBoxButton = ({ children, func, keyButton }) => {
    const { subtodoText } = useTodoItemChildContext();

    return (
        <button
            onClick={ func }
            title={`Move ${ subtodoText } ${ keyButton }`}
            className={ `todo-item-text-block__button todo-item-text-block__button_${ keyButton }` }
        >{ children }
        </button> 
    )
}