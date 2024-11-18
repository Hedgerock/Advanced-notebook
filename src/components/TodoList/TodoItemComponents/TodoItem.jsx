
import { useTodoItemContext } from '../../hooks';
import { AddSubTodo } from './AddSubTodo';
import './TodoItem.css'
import { TodoItemDeleteButton } from './TodoItemDeleteButton';
import { TodoValue } from './TododItemChlidren/TodoValue';
import { TitleBox, TitleBoxProvider } from './TitleBox';
import { TodoItemCheckbox } from './TodoItemCheckbox';
import { TodoItemButtonCopy } from './TodoItemButtonCopy';
import { TodoItemModals } from './TodoItemModals/TodoItemModals';
import { useGetTodoItemButtons } from '../hooks';

export const TodoItem = () => {
    const { 
        actualClassName, 
        lastChildClassName,
        isChangable,
        isSingleNotation
    } = useTodoItemContext();

    const { modalData, buttons, calcModal } = useGetTodoItemButtons();

    const notationClassName = isSingleNotation
     ? 'todo-item_for-presentation-with-active-single-notation' 
     : 'todo-item_for-presentation' 

    const presentationClassName = !isChangable ? notationClassName : '';
    const currentClassName = `${actualClassName} ${ lastChildClassName } ${ presentationClassName }`.split(' ').filter(el => el).join(' ')

    return (
        <>
            <div className= { currentClassName }>

                { isChangable && <TodoItemCheckbox /> }

                <TodoValue />

                <AddSubTodo buttons = { buttons }/>

                <TitleBoxProvider>
                    <TitleBox />
                </TitleBoxProvider>

                <TodoItemButtonCopy />

                <TodoItemDeleteButton />
                
            </div>

            <TodoItemModals
                modalData={ modalData } 
                calcModal={ calcModal }
            />
        </>

        
    )
}