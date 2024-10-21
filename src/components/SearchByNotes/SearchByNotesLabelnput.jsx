import { useSwitchValue } from "./hooks";

export const SearchByNotesLabelInput = () => {
    const { isChecked, switchHandler } = useSwitchValue();

    return (
        <input 
            className='search-by-notes-label__input' 
            type='checkbox' 
            checked = { isChecked } 
            onChange={ switchHandler }
        />
    )
}