import { useTodoContext } from '../../hooks'

import './DeletedTodosValue.css';

export const DeletedTodosValue = () => {
    const { setModal } = useTodoContext();

    return (
        <button 
            className="deleted-todos__value"
            onClick={ () => setModal(prev => !prev) }
        >Recently deleted todos
        </button >
    )
}