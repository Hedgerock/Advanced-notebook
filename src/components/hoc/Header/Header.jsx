import { useTodoContext } from '../../hooks';
import './Header.css';

export const Header = ({ children }) => {
    const { contentInputData } = useTodoContext();
    const actualClassName = contentInputData.some(el => el.notation?.status) ? 'header header_alternate' : 'header';

    return (
        <div className={ actualClassName }>
            { children }
        </div>
    )
}