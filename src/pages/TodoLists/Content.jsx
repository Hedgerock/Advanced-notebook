export const Content = ({ setTitle, title, initNewTodoListHandler, list }) => {
    const values = list.map(el => el.title);
    const isTheSame = values.includes(title.trim());

    const initTitle = (e) => {
        if (!/[а-я\dі]/gi.test(e.target.value)) {
            setTitle(e.target.value)
        }
    }

    return (
        <div className="content">
            {title && 
                <h1 className="content__title">{title}</h1>
            }

            <label className="content-label">
                { isTheSame && 
                    <span className="content__warning-span">
                        { title } is already exists change to another
                    </span> 
                }

                <input 
                    className={`content__input ${ isTheSame ? 'content__input_warning' : '' }`}
                    onChange = { initTitle }  
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