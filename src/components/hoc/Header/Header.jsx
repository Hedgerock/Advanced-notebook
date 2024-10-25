import { useTodoContext } from '../../hooks';
import { checkFormForNotations } from '../../utils';
import './Header.css';

export const Header = ({ children }) => {
    const { contentInputData } = useTodoContext();
    const actualClassName = checkFormForNotations({ form: contentInputData }) ? 'header header_alternate' : 'header';

    return (
        <div className={ actualClassName }>
            { children }
        </div>
    )
}