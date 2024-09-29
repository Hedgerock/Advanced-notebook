import './EmptyList.css';

export const EmptyList = () => {

    return (
        <div className="empty-list">
            <h1 className='empty-list__title'>Todo list is empty</h1>
            <div className="empty-list-img">
                <img 
                    src={ process.env.PUBLIC_URL + '/noTodo.png' } 
                    alt = "This list is empty"
                    className='empty-list-img__src'
                />
            </div>
            <h1 className='empty-list__title'>Let's fix this</h1>
        </div>
    )
}