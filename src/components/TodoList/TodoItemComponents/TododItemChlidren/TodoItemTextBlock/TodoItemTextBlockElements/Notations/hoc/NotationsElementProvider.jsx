

import NotationsElProvider from '../../../../../../../../context/notationsElementContext'
import { useState } from "react";
import { useTodoItemChildContext } from '../../../../hooks';
import { useTodoItemContext } from '../../../../../../../hooks'

export const NotationsElementProvider = ({ data, children }) => {
    const { id, text, isActive = false } = data;
    const { buttonIcons, setTodo, subtodoId } = useTodoItemChildContext();
    const { id: parentId } = useTodoItemContext();
    const [isEdit, setIsEdit] = useState(false);
    const [editNotation, setEditNotation] = useState(text);

    return (
       <NotationsElProvider value = {{
            id,
            text,
            isActive,
            isEdit,
            setIsEdit,
            editNotation,
            setEditNotation,
            buttonIcons,
            setData: setTodo,
            parentId: subtodoId,
            mainParentId: parentId,
       }}>

        { children }

       </NotationsElProvider>
    )

}