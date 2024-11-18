import { useGetList } from "../hooks";
import { ListBox } from "./ListBox";

export const CountBox = () => {
    const { list, data:el, total } = useGetList();

    return (
        <div className="count-box">
            { !!list.length && 
                <span className="count-box__total">{ total }</span>
            }
            <div className="count-box-header">
                <h4>{ el.text }</h4>
                <div className="count">Total: { el.count?.value }</div>
            </div>
            <ul>
                { list.map(val => (
                    <ListBox
                        key={ val.id } 
                        data = { val } 
                        parent={ el }
                    />
                ))}
            </ul>
        </div>
    )
}