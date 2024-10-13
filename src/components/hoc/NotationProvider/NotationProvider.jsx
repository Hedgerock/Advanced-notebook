import NotationContextProvider from '../../../context/notationContext';
import { useTodoContext } from '../../hooks';

export const NotationProvider = ({ children, value, valueIndex, notationList, setNotationList, currentClassName, mainData, mainIndex, setMainData }) => {
    const { buttonIcons } = useTodoContext();

    return (
        <NotationContextProvider value = {{
            value,
            valueIndex,
            notationList,
            setNotationList,
            buttonIcons,
            currentClassName,
            mainData,
            setMainData,
            mainIndex
        }}>
            { children }
        </NotationContextProvider>
    )
}