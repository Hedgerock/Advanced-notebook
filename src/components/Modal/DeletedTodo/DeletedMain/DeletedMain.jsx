import { DeletedTodoBox } from "./DeletedTodoBox";
import { DeletedTodoButton } from "./DeletedTodoButton";
import { DeletedTodoList, DeletedTodoLIstElement } from "./DeletedTodoList";
import { DeletedTodoTitle } from "./DeletedTodoTitle";

export const DeletedMain = () => {
    return (
        <>
            <DeletedTodoBox>

            <DeletedTodoTitle />

            <DeletedTodoList>
                <DeletedTodoLIstElement />
            </DeletedTodoList>

            </DeletedTodoBox>

            <DeletedTodoButton />
        </>
    )
}