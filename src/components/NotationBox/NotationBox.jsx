

import { ButtonIcon } from '../ButtonIcon';
import { NotationProvider } from '../hoc/NotationProvider';
import { NotationElement } from './NotationElement';
import './NotationBox.css';
import { useInitNewNotation } from './hooks';


export const NotationBox = ({ data, notationList, setNotationList, currentClassName, index, mainData, setMainData }) => {
    const { create, initNewNotation } = useInitNewNotation({ setMainData, data });
    const actualClassName = `${ currentClassName }-box ${ data.notation.value.length === 1 ? `${ currentClassName }-box_single` : '' }`

    return (
        <div className={ actualClassName }>
            { data.notation.value.map((value, valueIndex) => (
               <NotationProvider
                    key={ valueIndex }
                    value = { value } 
                    valueIndex = { valueIndex }
                    notationList = { notationList } 
                    setNotationList = { setNotationList}
                    currentClassName = { currentClassName }
                    mainData = { mainData }
                    setMainData = { setMainData }
                    mainIndex = { index }
                > 

                <NotationElement/>

               </NotationProvider>
            ))
            
            }
            <button 
                className='todo-form__add-btn'
                title='Create new notation'
                onClick={ initNewNotation }
            >
                <ButtonIcon value = { create }/>
            </button>
    </div>
    )
}