import { Link } from "react-router-dom"
import { DeletedTodoOptions } from "../components/DeletedTodosOptions"
import { Header, NotificationContainer, SearchContainer } from "../components/hoc"
import { useTodoContext } from "../components/hooks"
import { MainFormParent } from "../components/MainFormParent"
import { DeletedTodo, Modal, ModalCloseButton } from "../components/Modal"
import { ModalBox, ModalBoxValue } from "../components/ModalValues"
import { ModalBoxesList } from "../components/ModalValues/hoc"
import { NotificationContainerMain } from "../components/NotificationContainer"
import { SearchBox, SearchIcon } from "../components/SearchBox"
import { SearchByNotesList } from "../components/SearchByNotes/hoc"
import { SearchByNotesElement } from "../components/SearchByNotes/SearchByNotesElement"
import { TodoList } from "../components/TodoList/hoc"
import { EmptyList, FullList } from "../components/TodoList/ListTypes"
import { ButtonIcon } from "../components/ButtonIcon"

export const CurrentTodoList = () => {
    const { 
        filteredTodo,
        buttonIcons
    } = useTodoContext();
    
    const { back } = buttonIcons;

    return (
        <div className="App">
            <Header>
                <MainFormParent />
                
                <div className="header-right-part">
                    <Link 
                        to = { '/React-todo-list' }
                        className="header-right-part__backward-link"
                    >
                        <ButtonIcon value={ back }/>
                    </Link>

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
    )
}