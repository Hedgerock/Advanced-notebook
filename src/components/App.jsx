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

function App() {
  const { todo, setTodo } = useGetCoreData();
  const { notificationData, setNotificationData, currentId, initNewNotification } = useGetNotificationData();
  const { searchParam, setSearchParam, filteredTodo, undeletedTodos, deletedTodos } = useFilteredCoreData({ todo });

  const [ modal, setModal ] = useState(false);

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
          undeletedTodos
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

        </Header>

        { deletedTodos.length !== 0 &&
          <DeletedTodos>
            <DeletedTodosValue />
          </DeletedTodos>
        }

        { (modal && deletedTodos.length !== 0) && 
          <Modal>
            <DeletedTodo />
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