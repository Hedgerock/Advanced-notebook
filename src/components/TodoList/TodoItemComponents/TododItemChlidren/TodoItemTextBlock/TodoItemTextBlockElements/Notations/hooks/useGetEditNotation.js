import { useEffect, useState } from "react";

export const useGetEditNotation = ({ changeStatus, text }) => {

    const [isEdit, setIsEdit] = useState(false);
    const [editNotation, setEditNotation] = useState(text);

    useEffect(() => {
        if (!changeStatus) {
            setIsEdit(false)
        }
    }, [changeStatus])

    return { isEdit, setIsEdit, editNotation, setEditNotation }
}