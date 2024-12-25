import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const useTodoListsSetup = () => {

    const [list, setList] = useState(() => {
        const todoLists = localStorage.getItem("todoLists");
        return todoLists ? JSON.parse(todoLists) : [];
    });

    const initLink = () => {
        return title.split(' ').map(el => el.toLowerCase()).join('_');
    }

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("todoLists", JSON.stringify(list));
    }, [list])

    const [ isOpen, setOpen ] = useState(false);
    const [title, setTitle] = useState("");

    const openHandler = () => {
        setOpen(prev => !prev);
    }

    const closeHandler = () => {
        setOpen(false);
        setTitle('');
    }

    const initNewTodoListHandler = () => {
        setList(prev => {
            return [...prev,
                { id: prev.length + 1, title }
            ]
        })
        setTitle("");
        navigate(`/React-todo-list/${ initLink() }`);
        openHandler();

        localStorage.setItem(`${ title.toLowerCase().trim() } todos`, JSON.stringify([]))
    }

    return { 
        initNewTodoListHandler, 
        closeHandler, 
        openHandler, 
        list,
        setList, 
        isOpen, 
        title, 
        setTitle 
    };
}