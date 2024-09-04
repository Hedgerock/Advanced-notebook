import './App.css';
import TodoContextProvider from '../context/todoContext';
import { TodoForm } from './TodoForm';
import { EmptyList, FullList } from './TodoList/ListTypes';
import { TodoList } from './TodoList/hoc';
import { useFilteredCoreData, useGetCoreData } from './hooks';
import { CopyContainerMain } from './СopyContainer';
import { CopyContainer, Header, TodoFormProvider } from './hoc';
import { SearchContainer } from './hoc/SearchContainer';
import { SearchBox, SearchIcon } from './SearchBox';

function App() {
  const { todo, setTodo, copyData, setCopyData, currentId } = useGetCoreData();
  const { searchParam, setSearchParam, filteredTodo } = useFilteredCoreData({ todo });

  return (
    <TodoContextProvider value = { { todo, setTodo, copyData, setCopyData, currentId, filteredTodo, searchParam, setSearchParam } }>
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

        <TodoList>

            { filteredTodo.length 
                ? <FullList />
                : <EmptyList />
            }

        </TodoList>
        
        { copyData.length !== 0 && 
          <CopyContainer>
            <CopyContainerMain />
          </CopyContainer> 
        }
      </div>
    </TodoContextProvider>
  );
}

export default App;
