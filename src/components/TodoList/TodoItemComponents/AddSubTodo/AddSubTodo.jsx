import { ButtonIcon } from '../../../ButtonIcon';
import { useInitNewSubTodo } from '../hooks';
import './AddSubTodo.css';
import { TodoFormProvider } from '../../../hoc';
import { TodoForm } from '../../../TodoForm';
import { useTodoItemContext } from '../../../hooks';
import { TodoItemParent } from '../../hoc';
import { TodoItem } from '../TodoItem';
import { TodoItemModal } from '../TodoItemModal';
import { initialNotation, todoFormInterface } from '../../../../data';
import { useState } from 'react';

export const AddSubTodo = () => {
    const { 
        buttonIcons, 
        title,
        createSubTodoModal, 
        setCreateSubTodoModal, 
        newSubtodos, 
        setNewSubtodos,
        fullData,
        index,
        presentationData,
        isChangable,
        maxId,
        data,
    } = useTodoItemContext();

    const { createSubTodo } = useInitNewSubTodo();
    const { create, calculate } = buttonIcons

    const [ calcModal, setCalcModal ] = useState(false);

    const closeModal = () => {
        setNewSubtodos([todoFormInterface({ id: maxId, content: '', notation: initialNotation })])
        setCreateSubTodoModal(false);
    }

    const filteredSubTodos = data.text.filter(el => el.count?.status && !el.deleted && !el.status);

    const closeCalcModal = () => {
        setCalcModal(false);
    }

    const obj = {};

    filteredSubTodos.forEach(el => {
        el.notation.forEach(val => {
            const key = val.text.toLowerCase();

            obj[key] ? obj[key]+= val.count.derivative : obj[key] = val.count.derivative
        })
        const key = el.text.toLowerCase();

        obj[key] ? obj[key]+= el.count.value : obj[key] = el.count.value
    })

    return (
        <>
            <div className="add-subtodo">
                <button 
                    className='add-subtodo__button'
                    onClick={ () => setCalcModal(prev => !prev) }
                >
                    <ButtonIcon value = { calculate }/>
                </button>

                <button
                    disabled = { !isChangable }
                    onClick={ () => {
                        if ( !isChangable ) return;
                        setCreateSubTodoModal(prev => !prev)
                    } }
                    className='add-subtodo__button'
                >
                    <ButtonIcon value = { create }/>
                </button>
            </div>

            { createSubTodoModal && 
                <TodoItemModal 
                    closeFunc={ closeModal } 
                    currentText = { `This is a creation modal of the "${ title }" subtodos` }
                >
                    <TodoFormProvider 
                        mainData={ newSubtodos } 
                        setMainData={ setNewSubtodos }
                        initDataFunction={ createSubTodo }
                        isDataWithTitle={ false }
                    >
                        <TodoForm />
                    </TodoFormProvider>
                        
                    <TodoItemParent 
                        data = { presentationData }
                        fullData = { fullData }
                        index = { index }
                        isChangable={ false }
                    >
                        <TodoItem />
                    </TodoItemParent>
                </TodoItemModal>
            }

            { calcModal &&
                <TodoItemModal 
                    closeFunc={ closeCalcModal } 
                    currentText = { `This is a calculated modal of the "${ title }" subtodos` }
                >
                    <div className="count-container">
                        { filteredSubTodos
                            .sort((a,b) => b.count.value === a.count.value 
                                ? a.text.localeCompare(b.text) 
                                : b.count.value - a.count.value
                            )
                            .map(el => {
                            return (
                                <div className="count-box" key={ el.id }>
                                    <div className="count-box-header">
                                        <h4>{ el.text }</h4>
                                        <div className="count">Total: { el.count?.value }</div>
                                    </div>
                                    <ul>{ el.notation
                                    .sort((a,b) => b.count.derivative === a.count.derivative 
                                        ? a.text.localeCompare(b.text) 
                                        : b.count.derivative - a.count.derivative
                                    )
                                    .map(val => {
                                        return (
                                            <li 
                                                key = { val.id }
                                            >
                                                <div className="list-box">
                                                    <h4>{ val.text }</h4>
                                                    <span><b>{ val.count.value }</b> x { el.count.value } = <b>{ val.count.derivative }</b></span>
                                                </div>
                                            </li>
                                        )
                                    }) }</ul>
                                </div>
                                
                            )
                        }) }

                        <div className="count-total-box">
                            { Object.entries(obj).filter(el => el[0] && el[1]).sort((a,b) => b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]).map((el, index) => {
                                return (
                                    <div className="total-elements" key = { index }>
                                        <h3>{ el[0] }:</h3>
                                        <span>{ el[1] }</span>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </TodoItemModal>
            }
        </>
    )
}