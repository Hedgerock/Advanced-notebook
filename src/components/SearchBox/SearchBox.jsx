import { useTodoContext } from "../hooks"
import './SearchBox.css';

export const SearchBox = () => {
    const { searchParam, setSearchParam } = useTodoContext();

    return (
        <div className="search-box">
            <input 
                className='search-box__input' 
                type="text" 
                placeholder='Find your todo'
                onChange={ e => setSearchParam(e.target.value) }
                value={ searchParam }
            />
        </div>
    )
}