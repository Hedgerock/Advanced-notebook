import { useEffect, useState } from "react";

export const useGetCoreData = () => {
    const [todo, setTodo] = useState(() => {
        const savedTodos = localStorage.getItem('myTodos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [copyData, setCopyData] = useState([]);
    const currentId = copyData?.map(el => el.id).sort((a,b) => b - a)[0];
    
    useEffect(() => {
        localStorage.setItem('myTodos', JSON.stringify(todo));
    }, [todo]);

    return { todo, setTodo, copyData, setCopyData, currentId }
}