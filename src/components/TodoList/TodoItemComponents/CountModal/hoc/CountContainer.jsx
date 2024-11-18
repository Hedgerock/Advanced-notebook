import { useGetCalcData } from "../hooks/useGetCalcData";
import CountContextProvider from '../context/countContext';
import { CountTotalBox } from "../CountTotalBox/CountTotalBox";

export const CountContainer = ({ children }) => {
    const { currentData, currentTotal } = useGetCalcData();

    return (
        <div className="count-container">
            <div className="count-box-container">
                { currentData.map((el, index) => {
                    return (
                        <CountContextProvider 
                            key = { el.id }
                            value = {{ data: el, index }}
                        >
                            { children }
                        </CountContextProvider>
                    )})
                }
            </div>

            <CountTotalBox currentTotal={ currentTotal }/>
        </div>
    )
}