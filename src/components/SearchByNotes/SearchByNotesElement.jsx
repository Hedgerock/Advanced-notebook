import { useSearchByNotesContext } from "../hooks/useSearchByNotesContext"
import { SearchByNotesLabelInput } from "./SearchByNotesLabelnput";

export const SearchByNotesElement = () => {
    const { title, count } = useSearchByNotesContext();

    return (
        <div className="search-by-notes-box-element">
            <label className='search-by-notes-label'>
                <span className='search-by-notes-label__text' >{ title }</span>
                <SearchByNotesLabelInput />
                <span>{ count }</span>
            </label>
        </div>
    )
}