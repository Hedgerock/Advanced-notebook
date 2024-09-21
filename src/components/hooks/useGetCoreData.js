import { useEffect, useState } from "react";

export const useGetCoreData = () => {
    const [todo, setTodo] = useState(() => {
        const savedTodos = localStorage.getItem('myTodos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('myTodos', JSON.stringify(todo));
    }, [todo]);

    return { todo, setTodo }
}