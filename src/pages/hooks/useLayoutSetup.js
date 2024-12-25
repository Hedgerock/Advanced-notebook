import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLayoutSetup = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').pop().replaceAll("_", " ")?.toLowerCase();
    const actualPathname = (pathname[0]?.toUpperCase() + pathname.slice(1)) !== undefined
        ? `Todo ${ pathname[0]?.toUpperCase() + pathname.slice(1) } page`
        : 'My todos';

    const myHeaderTitle = pathname === 'react-todo-list' || !pathname.trim().length 
        ? "HEADER" 
        : pathname?.toUpperCase();
        
    const myFooterTitle = pathname === 'react-todo-list' || !pathname.trim().length 
        ? "FOOTER" 
        : pathname?.toUpperCase();

    useEffect(() => {
        
        switch (location.pathname) { 
            case '/React-todo-list': 
                document.title = 'My todos'; 
                break; 
            case '/React-todo-list/not_found_page': 
                document.title = 'Page not found'; 
                break; 
            default: document.title = actualPathname; 
        }

    }, [location, actualPathname]);

    return { myFooterTitle, myHeaderTitle }
}