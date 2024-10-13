import { TodoForm } from './TodoForm';
import { EmptyList, FullList } from './TodoList/ListTypes';
import { TodoList } from './TodoList/hoc';
import { NotificationContainerMain } from './NotificationContainer';
import { Header,NotificationContainer, TodoFormProvider } from './hoc';
import { SearchContainer } from './hoc/SearchContainer';
import { SearchBox, SearchIcon } from './SearchBox';
import { DeletedTodos, DeletedTodosValue } from './DeletedTodos';
import { DeletedTodo, Modal, ModalCloseButton } from './Modal';
import { DeletedTodoOptions } from './DeletedTodosOptions';
import { useInitNewTodo, useTodoContext } from './hooks';

import './App.css';

export const App = () => {
  const { notificationData, filteredTodo, modal, isNotEmpty, contentInputData, setContentInputData } = useTodoContext();
  const { initNewTodo } = useInitNewTodo();

  return (
    <div className="App">
        <Header>

          <TodoFormProvider 
            mainData={ contentInputData }
            setMainData={ setContentInputData }
            initDataFunction={ initNewTodo }
            isDataWithTitle = { true }
          >
            <TodoForm />
          </TodoFormProvider>

          <div className="header-right-part">
            <SearchContainer>

              <SearchBox />
              <SearchIcon />

            </SearchContainer>

            { isNotEmpty && 
              <DeletedTodos>
                <DeletedTodosValue />
              </DeletedTodos>
              }
          </div>

        </Header>

        { (modal && isNotEmpty) && 
          <Modal>
            <div className="deleted-todo-main-part">
              <DeletedTodo />
              <DeletedTodoOptions type = { 'all' }/>
            </div>
            <ModalCloseButton />
          </Modal>
        }

        <TodoList>

            { filteredTodo.length 
                ? <FullList />
                : <EmptyList />
            }

        </TodoList>
        
        { notificationData.length !== 0 && 
          <NotificationContainer>
            <NotificationContainerMain />
          </NotificationContainer> 
        }
    </div>
  );
}