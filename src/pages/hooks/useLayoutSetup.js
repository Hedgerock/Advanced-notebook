import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLayoutSetup = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').pop().replaceAll("_", " ")?.toLowerCase();
    const actualPathname = pathname[0]?.toUpperCase() + pathname.slice(1);

    const myHeaderTitle = pathname === 'react-todo-list' ? "HEADER" : pathname?.toUpperCase();
    const myFooterTitle = pathname === 'react-todo-list' ? "FOOTER" : pathname?.toUpperCase();

    useEffect(() => {
        
        switch (location.pathname) { 
            case '/React-todo-list': 
                document.title = 'My todos'; 
                break; 
            case '/React-todo-list/not_found_page': 
                document.title = 'Page not found'; 
                break; 
            default: document.title = `Todo ${ actualPathname } page`; 
        }

    }, [location, actualPathname]);

    return { myFooterTitle, myHeaderTitle }
}