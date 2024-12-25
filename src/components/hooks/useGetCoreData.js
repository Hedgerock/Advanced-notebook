import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useGetCoreData = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').pop().replaceAll("_", " ").toLowerCase();
    const navigate = useNavigate();
    const allLists = JSON.parse(localStorage.getItem("todoLists"))?.map(el => el.title.toLowerCase());
    
    const [todo, setTodo] = useState(() => {
        const savedTodos = localStorage.getItem(`${ pathname } todos`);
        return !savedTodos ? [] : JSON.parse(savedTodos);
    });

    useEffect(() => {
        if (!allLists.includes(pathname) || pathname === 'react-todo-list') {
            return;
        }

        localStorage.setItem(`${ pathname } todos`, JSON.stringify(todo));
    }, [todo, pathname, allLists]);

    const savedTodos = localStorage.getItem(`${ pathname } todos`);


    useEffect(() => {
        if (!savedTodos) {
            navigate('/React-todo-list/not_found_page', { replace: true }); 
        }
        
    }, [savedTodos, navigate, pathname])

    return { todo, setTodo }
}