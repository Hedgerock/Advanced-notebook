import { TotalElements } from "./TotalElements"

export const CountTotalBox = ({ currentTotal }) => {

    return (
        <div className="count-total-box">
            { currentTotal.map(([title, value], index) => {
                    return (
                        <TotalElements 
                            title={ title } 
                            value={ value } 
                            key={ index }
                        />
                    )
                }) 
            }
        </div>
    )
}