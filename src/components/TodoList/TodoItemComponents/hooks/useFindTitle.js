import { useEffect, useState } from "react";
import { useTodoItemContext } from "../../../hooks";

export const useFindTitle = ({ title }) => {
    const { searchParam, setSearchParam } = useTodoItemContext();
    const [ value, setValue ] = useState('');

    const titleBoxSearched =  value.length && title.includes(value) ? 'title-box_searched' : '';
    const titleBoxClassName = `title-box ${ titleBoxSearched }`

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue('');
        }, 5000)

        setValue(searchParam);

        return () => clearTimeout(timer);
    }, [searchParam, setSearchParam])

    return { titleBoxClassName }
}