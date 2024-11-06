import { ButtonIcon } from "../../ButtonIcon";


export const AdjacentButtons = ({ children, isCounted, incrementer, decrementer, buttonIcons }) => {
    const { create, remove} = buttonIcons;

    return (
        <>
            <button 
                    className="total-elements-box__button"
                    onClick={ decrementer }
                    disabled = { !isCounted }
                >
                 <ButtonIcon value = { remove } />
            </button>

            { children }

            <button 
                className="total-elements-box__button"
                onClick={ incrementer }
                disabled = { !isCounted }
            >
                <ButtonIcon value = { create } />
            </button>
        </>
    )

}