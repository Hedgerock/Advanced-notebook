export const TodoChildrenList = ({ data }) => {

    return (
        data.map(el => (
            <div
                key={ el.id }
            >
                { el.text }
            </div>
        ))
    )
}