

import NotationsElProvider from '../../../../../../../../context/notationsElementContext'
import { useTodoItemChildContext } from '../../../../hooks';
import { useTodoItemContext } from '../../../../../../../hooks'
import { useGetEditNotation } from '../hooks';

export const NotationsElementProvider = ({ data, children, isChangable, mainData, parentValue }) => {
    const { id, text, isActive = false, count: notationCount } = data;
    const { buttonIcons, setTodo, subtodoId, count, allNotations, changeStatus } = useTodoItemChildContext();
    const { id: parentId } = useTodoItemContext();
    const { isEdit, setIsEdit, editNotation, setEditNotation } = useGetEditNotation({ changeStatus, text });
    

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
            count,
            notationCount,
            isChangable,
            allNotations,
            mainData,
            parentValue
       }}>

        { children }

       </NotationsElProvider>
    )

}