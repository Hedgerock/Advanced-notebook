import { ListOfTodoListsItem } from "./ListOfTodoListsItem";

export const ListOfTodoLists = ({ list, setList }) => {
    return (
        <ul className = "list-of-todo-lists">
            { [...list].reverse().map(el => {
                return (
                    <ListOfTodoListsItem 
                        key={ el.id }
                        data = { el } 
                        setList={ setList } 
                    />
                )
            }) }
        </ul>
    )
}