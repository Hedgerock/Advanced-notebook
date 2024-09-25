import { ButtonIcon } from '../../ButtonIcon';
import { useTodoContext } from '../../hooks';
import './SearchIcon.css';

export const SearchIcon = () => {
    const { buttonIcons } = useTodoContext();
    const { search } = buttonIcons

    return (
        <div className="search-icon">
            <ButtonIcon value={ search }/>
        </div>
    )
}