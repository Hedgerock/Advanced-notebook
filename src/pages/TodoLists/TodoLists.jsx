import { TodoContstructorModal } from "../../components/TodoConsturctorModal";
import './TodoLists.css';
import { ListOfTodoLists } from "./ListOfTodoLists";
import { useTodoListsSetup } from "../hooks";
import { Content } from "./Content";
import { TodoListsFactoryHeader } from "./TodoListsFactoryHeader";
import { EmptyList } from "../../components/TodoList/ListTypes";

export const TodoLists = () => {
    const { 
        initNewTodoListHandler, 
        closeHandler, 
        openHandler, 
        list,
        setList, 
        isOpen, 
        title, 
        setTitle 
    } = useTodoListsSetup();

    return (
        <div className = "todo-lists-factory">
            <TodoListsFactoryHeader openHandler={ openHandler }/>

           { list.length 
                ? <ListOfTodoLists 
                    list = { list } 
                    setList={ setList }
                />
                : <EmptyList />
           }
            
            { isOpen &&
                <TodoContstructorModal 
                    currentText={ 'Creational modal of the new todo list' } 
                    closeFunc={ closeHandler }
                >
                    <Content 
                        setTitle={ setTitle } 
                        title={ title } 
                        initNewTodoListHandler={ initNewTodoListHandler }
                        list = { list }
                    />
                </TodoContstructorModal>
            }
        </div>

    )
}