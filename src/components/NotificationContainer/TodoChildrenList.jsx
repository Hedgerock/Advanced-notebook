export const TodoChildrenList = ({ data }) => {

    return (
        data.map(el => (
            <span 
                key={ el.id }
            >
                { el.text }
            </span>
        ))
    )
}