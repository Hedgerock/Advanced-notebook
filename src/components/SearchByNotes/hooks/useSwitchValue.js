import { useSearchByNotesContext } from "../../hooks/useSearchByNotesContext";

export const useSwitchValue = () => {
    const { todo, setTodo, title } = useSearchByNotesContext();

    const isChecked = todo.every(val => val.text.every(t => t
        .notation?.filter(v => v.text.toLowerCase() === title?.toLowerCase())
        .every(v => v.isActive)))
    
    const switchHandler = () => {

        setTodo(prev => {
            return prev.map(curVal => {
                return {...curVal, text: curVal.text.map(x => {
                    return {...x, notation: x.notation?.map(notate => {
                        const curNotation = notate.text?.toLowerCase();
                        return curNotation === title?.toLowerCase()
                            ? {...notate, isActive: notate.isActive ? !notate.isActive : true}
                            : notate
                        })
                    }
                })}
            })
        })

    }

    return { switchHandler, isChecked }
}