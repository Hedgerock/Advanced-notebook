import { useTodoItemContext } from "../../../hooks";
import './TitleBox.css';
import { useInitNewTitle } from "../hooks/useInitNewTitle";
import { TodoItemTitle } from "./TodoItemTitle";
import { TodoItemTitleInput } from "./TodoItemTitleInput";
import { ConfirmButton, DeclineButton } from "./Buttons";

export const TitleBox = () => {
    const { data } = useTodoItemContext();
    const { title, id } = data

    const { editStatus, setEditStatus, titleValue, setTitleValue, updateTitle } = useInitNewTitle({ title, id })

    return (
        <div className="title-box">
                {!editStatus
                    ? <TodoItemTitle editStatus={ editStatus } setEditStatus={ setEditStatus }/>
                    : <TodoItemTitleInput titleValue={ titleValue } setTitleValue={ setTitleValue }/>
                }

                {editStatus &&
                    <div className="selection-box">
                        <ConfirmButton 
                            titleValue = { titleValue }
                            setTitleValue = { setTitleValue }
                            updateTitle = { updateTitle }
                            setEditStatus = { setEditStatus }
                        />
                        <DeclineButton 
                            setTitleValue = { setTitleValue }
                            setEditStatus = { setEditStatus }
                        />
                    </div>
                }
           </div>
    )
}