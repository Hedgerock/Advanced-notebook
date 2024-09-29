import { DeletedTodoBox } from "./DeletedTodoBox";
import { DeletedTodoList, DeletedTodoLIstElement } from "./DeletedTodoList";
import { DeletedTodoTitle } from "./DeletedTodoTitle";
import { DeletedTodoOptions } from "../../../DeletedTodosOptions";

export const DeletedMain = () => {
    return (
        <>
            <DeletedTodoBox>

                <DeletedTodoTitle />

                <DeletedTodoList>
                    <DeletedTodoLIstElement />
                </DeletedTodoList>

            </DeletedTodoBox>

            <DeletedTodoOptions type = { 'currentAll' }/>
        </>
    )
}