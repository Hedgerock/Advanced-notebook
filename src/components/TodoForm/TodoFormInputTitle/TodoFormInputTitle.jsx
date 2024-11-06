
import { useGetTitleFunctions } from '../hooks';
import './TodoFormInputTitle.css';

export const TodoFormInputTitle = () => {
    const { valueSetter, initEnterEvent, title, actualClassName } = useGetTitleFunctions();

    return (
        <input 
            className= { actualClassName }
            type="text" 
            placeholder= 'Type your todo title'
            value={ title }
            onChange={ valueSetter }
            onKeyDown={ initEnterEvent }
        />
    )
}