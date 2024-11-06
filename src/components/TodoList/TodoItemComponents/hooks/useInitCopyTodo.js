import { useTodoItemContext } from "../../../hooks";

export const useInitCopyTodo = () => {
    const { 
        title, 
        text, 
        setNotificationData, 
        initNewNotification,
        buttonIcons
    } = useTodoItemContext();

    const { copy } = buttonIcons


    const initCopyTodo = () => {
        const obj = {};

        text.filter(el => el.count?.status && !el.deleted && !el.status).forEach(el => {
            el.notation.forEach(val => {
            const key = val.text.toLowerCase();

            obj[key] ? obj[key]+= val.count.derivative : obj[key] = val.count.derivative
            })
         const key = el.text.toLowerCase();

            obj[key] ? obj[key]+= el.count.value : obj[key] = el.count.value
        })

        const totalRaw = Object.entries(obj).filter(el => el[0] && el[1]).sort((a,b) => b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]).map((el, index, arr) => {
            return `${ index + 1 }. ${ el[0] }: ${ el[1] }${ arr[index + 1] ? ';' : '' }`
        }).join('\n')

        const total = `\nTotal:\n${ totalRaw }`

        const todosChildren = text
            .sort((a,b) => b.count?.value === a.count?.value ? a.text.localeCompare(b.text) : b.count?.value - a.count?.value)
            .map((item, ind) => {
                const a = ind + 1;
                const b = item.text;
                const c = item.count?.status ? item.count.value : '';
                const d = text[ind + 1] ? ";" : "";
                
                const e = item.notation.filter(el => el.text).map((el, notationIndex, arr) => `${ a }.${ notationIndex + 1 }. ${ el.text }: ${el.count?.derivative}${arr[notationIndex + 1] ? ";" : "\n"}`).join('\n  ')

                return `${ a }. ${ b } ${ c }${ d }\n\t${ e }`.trim();
            })
            .join('\n ')
        const copiedValue = `${ title }:\n ${ todosChildren } \n${ total }`
        navigator.clipboard.writeText(copiedValue);

        setNotificationData(prev => initNewNotification(
            { 
                data: prev, 
                textData: text, 
                titleData: title, 
                typeData: { element: 'todo', action: 'copied' } 
            }
        ))
    }

    return { initCopyTodo, copy }
}