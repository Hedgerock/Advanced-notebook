import ModalBoxesContextProvider from '../../../context/modalBoxesContext';

export const ModalBoxesProvider = ({ children, data }) => {
    const { id, title, buttonFunc, buttonValue, condition } = data;
    
    return (
        <ModalBoxesContextProvider value = {{
            id, 
            title, 
            buttonFunc, 
            buttonValue, 
            condition
        }}>
            { children }
        </ModalBoxesContextProvider>
    )
}