import './App.css';
import TodoContextProvider from '../context/todoContext';
import { TodoForm } from './TodoForm';
import { EmptyList, FullList } from './TodoList/ListTypes';
import { TodoList } from './TodoList/hoc';
import { useFilteredCoreData, useGetCoreData, useGetNotificationData } from './hooks';
import { NotificationContainerMain } from './NotificationContainer';
import { Header, NotificationContainer, TodoFormProvider } from './hoc';
import { SearchContainer } from './hoc/SearchContainer';
import { SearchBox, SearchIcon } from './SearchBox';
import { useState } from 'react';
import { DeletedTodos, DeletedTodosValue } from './DeletedTodos';
import { DeletedTodo, Modal, ModalCloseButton } from './Modal';
import { buttonIcons } from '../data';
import { DeletedTodoOptions } from './DeletedTodosOptions';

function App() {
  const { todo, setTodo } = useGetCoreData();
  const { notificationData, setNotificationData, currentId, initNewNotification } = useGetNotificationData();
  const { searchParam, setSearchParam, filteredTodo, undeletedTodos, deletedTodos } = useFilteredCoreData({ todo });

  const isNotEmpty = deletedTodos.length !== 0;
  const [ modal, setModal ] = useState(isNotEmpty);

  return (
    <TodoContextProvider value = { 
        { 
          todo, 
          setTodo, 
          notificationData, 
          setNotificationData,
          currentId, 
          initNewNotification,
          filteredTodo,
          searchParam, 
          setSearchParam,
          modal,
          setModal,
          deletedTodos,
          undeletedTodos,
          buttonIcons
        } 
      }>
      <div className="App">
        <Header>

          <TodoFormProvider>
            <TodoForm />
          </TodoFormProvider>

          <SearchContainer>

            <SearchBox />
            <SearchIcon />

          </SearchContainer>

          { isNotEmpty &&
            <DeletedTodos>
              <DeletedTodosValue />
            </DeletedTodos>
          }

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
    </TodoContextProvider>
  );
}

export default App;