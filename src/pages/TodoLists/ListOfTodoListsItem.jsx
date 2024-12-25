import { Link } from "react-router-dom"
import { Options } from "./Options";

export const ListOfTodoListsItem = ({ data: el, setList }) => {
    const initLink = () => {
        return el.title.split(' ').filter(el => el).map(el => el.toLowerCase()).join('_');
    }
    
    return (
        <li
            title = { el.title }
            className="list-of-todo-lists-item"
        >
            <Link
                className="list-of-todo-lists-item__link"
                to = { initLink() }
            >   { el.title }
            </Link>

            <Options setList={ setList } data={ el }/>
        </li>
    )
}