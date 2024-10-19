
export const NotationsElementButton = ({ children, func, modificatior, title }) => {

    return (
        <button
            title={ title }
            className={`notations__btn notations__btn_${ modificatior }`}
            onClick={ func }
        >
            { children }
        </button>
    )

}