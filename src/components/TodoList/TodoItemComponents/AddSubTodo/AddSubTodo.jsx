import './AddSubTodo.css';
import { ButtonsList } from '../../../ButtonsList';

export const AddSubTodo = ({ buttons }) => {
    return (
        <div className="add-subtodo">
            <ButtonsList 
                data = { buttons } 
                currentClassName={ 'add-subtodo__button' }
            />
        </div>
    )
}