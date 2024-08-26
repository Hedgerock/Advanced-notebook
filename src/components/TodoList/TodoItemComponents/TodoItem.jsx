
import { useTodoItemContext } from '../../hooks';
import { AddSubTodo } from './AddSubTodo';
import './TodoItem.css'
import { TodoItemCheckbox } from './TodoItemCheckbox';
import { TodoItemDeleteButton } from './TodoItemDeleteButton';
import { TodoValue } from './TododItemChlidren/TodoValue';
import { TitleBox } from './TitleBox';

export const TodoItem = () => {
    const { actualClassName } = useTodoItemContext();
    return (
        <div className= { actualClassName }>
            <TodoItemCheckbox />
            
            <TodoValue />

            <AddSubTodo />

            <TitleBox />

            <TodoItemDeleteButton />
        </div>
    )
}