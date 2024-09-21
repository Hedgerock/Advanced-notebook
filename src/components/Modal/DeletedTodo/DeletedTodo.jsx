
import { DeletedTodosProvider } from '../../hoc';
import { useTodoContext } from '../../hooks';
import { DeletedMain } from './DeletedMain';
import './DeletedTodo.css';

export const DeletedTodo = () => {
    const { deletedTodos } = useTodoContext(); 

    return (
        deletedTodos.map(item => (
            <DeletedTodosProvider key={ item.id } data = { item }>
                <div className="deleted-todo">
                  <DeletedMain />
                </div>
            </DeletedTodosProvider>
        ))
    )
}