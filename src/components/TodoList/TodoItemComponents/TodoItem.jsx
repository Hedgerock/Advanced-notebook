
import { useTodoItemContext } from '../../hooks';
import { AddSubTodo } from './AddSubTodo';
import './TodoItem.css'
import { TodoItemDeleteButton } from './TodoItemDeleteButton';
import { TodoValue } from './TododItemChlidren/TodoValue';
import { TitleBox, TitleBoxProvider } from './TitleBox';
import { TodoItemCheckbox } from './TodoItemCheckbox';
import { TodoItemButtonCopy } from './TodoItemButtonCopy';

export const TodoItem = () => {
    const { 
        actualClassName, 
        lastChildClassName,
        isChangable
    } = useTodoItemContext();

    return (
        <div className= { `${actualClassName} ${ lastChildClassName }` }>

            { isChangable && <TodoItemCheckbox /> }
            
            <TodoValue />

            <AddSubTodo />

            <TitleBoxProvider>
                <TitleBox />
            </TitleBoxProvider>

            <TodoItemButtonCopy />

            <TodoItemDeleteButton />
        </div>
    )
}