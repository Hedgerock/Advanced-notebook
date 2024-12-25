export const Content = ({ setTitle, title, initNewTodoListHandler, list }) => {
    const values = list.map(el => el.title);
    const isTheSame = values.includes(title.trim());

    return (
        <div className="content">
            <label className="content-label">
                { isTheSame && 
                    <span className="content__warning-span">
                        { title } is already exists change to another
                    </span> 
                }
                <input 
                    className={`content__input ${ isTheSame ? 'content__input_warning' : '' }`}
                    onChange = { (e) => setTitle(e.target.value) }  
                    type="text" 
                    placeholder="Type todo list name" 
                    value={ title } 
                />
            </label>
            <button
                className="content__button" 
                onClick={initNewTodoListHandler}
                disabled = { !title.length || isTheSame }
            >
                Create
            </button>
        </div>
    )
}