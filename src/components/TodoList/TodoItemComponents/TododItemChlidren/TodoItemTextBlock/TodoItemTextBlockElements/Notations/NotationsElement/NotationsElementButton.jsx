import { useTodoItemChildContext } from "../../../../hooks"

export const NotationsElementButton = ({ children, func, modificatior, title }) => {
    const { status } = useTodoItemChildContext();

    return (
        <button
            title={ status ? 'For updating notations, subtodo must be unfinished' : title }
            className={`notations__btn notations__btn_${ modificatior }`}
            onClick={ func }
        >
            { children }
        </button>
    )

}