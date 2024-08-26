import { useTodoContext } from "../hooks"

export const CopyBoxButton = ({ id }) => {
    const { copyData, setCopyData } = useTodoContext();

    return (
        <button
            className='copy-box__button'
            onClick={ () => setCopyData(copyData.filter(item => item.id !== id)) }
        >
            X
        </button>
    )
}