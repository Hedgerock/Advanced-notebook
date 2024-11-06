import { useEffect, useState } from "react";

export const useGetTodoFormItemProviderData = ({ data, setMainData }) => {

    const [ notationList, setNotationList ] = useState(data.notation.value);

    useEffect(() => {
        setMainData(prev => {
            return prev.map(el => {
                return el.id === data.id
                    ? {...el, notation: {...el.notation, value: notationList }}
                    : el
            })
        })

    }, [data.id, setMainData, notationList ]);

    return { notationList, setNotationList }
}