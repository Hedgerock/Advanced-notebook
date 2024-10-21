import { useTodoContext } from "../../hooks";
import { SearchByNotesProvider } from "./SearchByNotesProvider";


export const SearchByNotesList = ({ children }) => {
    const { allNotations, isSearchByNote } = useTodoContext();

    return isSearchByNote &&
        <div className="search-by-notes-box">
            {
                allNotations.map(el => (
                    <SearchByNotesProvider key={ el.id } data = { el } allNotations = { allNotations }>
                        { children }
                    </SearchByNotesProvider>
                ))
            }
        </div>
}