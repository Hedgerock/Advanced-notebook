import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainProvider } from './hoc';
import { CurrentTodoList, Layout, NotFoundPage } from '../pages';
import { TodoLists } from '../pages/TodoLists';
import { route } from '../data';

export const App = () => {

  return (
    <Routes>
      <Route path = {`/${ route }`} element = { <Layout /> }>
          <Route path = ":id" element = { 
              <MainProvider>
                <CurrentTodoList />
              </MainProvider> }
            />
          <Route index element = { <TodoLists /> } />
          <Route path="not_found_page" element = { <NotFoundPage /> }/>
      </Route>
      <Route path='*' element = { <Navigate to = { `/${route}/not_found_page` } /> } />
    </Routes>
  )
}