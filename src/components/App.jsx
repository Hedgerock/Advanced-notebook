import { TodoForm } from './TodoForm';
import { EmptyList, FullList } from './TodoList/ListTypes';
import { TodoList } from './TodoList/hoc';
import { NotificationContainerMain } from './NotificationContainer';
import { Header,NotificationContainer, TodoFormProvider } from './hoc';
import { SearchContainer } from './hoc/SearchContainer';
import { SearchBox, SearchIcon } from './SearchBox';
import { DeletedTodo, Modal, ModalCloseButton } from './Modal';
import { DeletedTodoOptions } from './DeletedTodosOptions';
import { useInitNewTodo, useTodoContext } from './hooks';
import { ModalBox, ModalBoxValue } from './ModalValues';
import { SearchByNotesElement } from './SearchByNotes/SearchByNotesElement';

import './App.css';
import { ModalBoxesList } from './ModalValues/hoc';
import { SearchByNotesList } from './SearchByNotes/hoc';

export const App = () => {
  const { 
    filteredTodo, 
    contentInputData, 
    setContentInputData, 
  } = useTodoContext();
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

            <ModalBoxesList>
              <ModalBox>
                <ModalBoxValue />
              </ModalBox>
            </ModalBoxesList>
          </div>
        </Header>

        <SearchByNotesList>
          <SearchByNotesElement />
        </SearchByNotesList>

        <Modal>
          <div className="deleted-todo-main-part">
            <DeletedTodo />
            <DeletedTodoOptions type = { 'all' }/>
          </div>
          <ModalCloseButton />
        </Modal>

        <TodoList>

          { filteredTodo.length 
              ? <FullList />
              : <EmptyList />
          }

        </TodoList>
        
        <NotificationContainer>
            <NotificationContainerMain />
        </NotificationContainer> 
    </div>
  );
}