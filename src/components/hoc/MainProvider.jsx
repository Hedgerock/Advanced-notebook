import { useState } from "react";
import { useFilteredCoreData, useGetAllnotations, useGetContentInputData, useGetCoreData, useGetNotificationData } from "../hooks";
import TodoContextProvider from '../../context/todoContext';
import { buttonIcons } from "../../data";

export const MainProvider = ({ children }) => {
    const { todo, setTodo } = useGetCoreData();
    const { notificationData, setNotificationData, currentId, initNewNotification } = useGetNotificationData();
    const { searchParam, setSearchParam, filteredTodo, undeletedTodos, deletedTodos } = useFilteredCoreData({ todo });
    const { setDefaultData, contentInputData, setContentInputData } = useGetContentInputData();
    const isNotEmpty = deletedTodos.length !== 0;
    const [ modal, setModal ] = useState(isNotEmpty);
    const { allNotations, isSearchByNote, setIsSearchByNote } = useGetAllnotations({ filteredTodo });

    return (
        <TodoContextProvider value = { 
            { 
              todo, 
              setTodo, 
              notificationData, 
              setNotificationData,
              currentId, 
              initNewNotification,
              filteredTodo,
              searchParam, 
              setSearchParam,
              modal,
              setModal,
              deletedTodos,
              undeletedTodos,
              buttonIcons,
              isNotEmpty,
              contentInputData, 
              setContentInputData,
              allNotations, 
              isSearchByNote, 
              setIsSearchByNote,
              setDefaultData
            } 
        }>
            { children }
          </TodoContextProvider>
    )
}