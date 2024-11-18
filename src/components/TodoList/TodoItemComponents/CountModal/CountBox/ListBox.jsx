export const ListBox = ({ data: val, parent: el }) => {

    return (
        <li 
            key = { val.id }
        >
            <div className="list-box">
                <h4>{ val.text }</h4>
                <div>
                    <b>{ val.count.value }</b> 

                    <span> x { el.count.value } = </span>

                    <b>{ val.count.derivative }</b>

                </div>
            </div>
        </li>
    )
}