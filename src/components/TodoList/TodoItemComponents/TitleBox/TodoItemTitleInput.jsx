export const TodoItemTitleInput = ({ titleValue, setTitleValue }) => {

    return (
        <input
            className="todo-item__title todo-item__title_input"
            type='text'
            value = { titleValue }
            onChange={ e => setTitleValue(e.target.value) }
        />
    )
}