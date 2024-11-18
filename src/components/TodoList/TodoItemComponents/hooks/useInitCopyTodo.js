import { useTodoItemContext } from "../../../hooks";

export const useInitCopyTodo = () => {
    const { 
        title, 
        text, 
        setNotificationData, 
        initNewNotification,
        buttonIcons,
        calcObject
    } = useTodoItemContext();

    const { copy } = buttonIcons


    const initCopyTodo = () => {
        const totalRaw = Object.entries(calcObject)
        .filter(el => el[0] && el[1])
        .sort((a,b) => b[1] === a[1] ? a[0].localeCompare(b[0]) : b[1] - a[1])
        .map((el, index, arr) => {
            return `${ index + 1 }. ${ el[0] }: ${ el[1] }${ arr[index + 1] ? ';' : '' }`
        }).join('\n')

        /* const total = `\nTotal:\n${ totalRaw }` */

        const todosChildren = text
            .sort((a,b) => b.count?.value === a.count?.value ? a.text.localeCompare(b.text) : b.count?.value - a.count?.value)
            .map((item, ind) => {
                const a = ind + 1;
                const b = item.text;
                const c = item.count?.status ? item.count.value : '';
                const d = text[ind + 1] ? ";" : "";
                
                const e = item.notation.filter(el => el.text).map((el, notationIndex, arr) => {
                    const curNum = notationIndex + 1;
                    const derivative = el.count?.derivative;
                    const text = el.text;
                    const isNextNotation = !!arr[notationIndex + 1];
                    const countRes = item.count?.status && el.count?.status 
                        ? `: ${ derivative }${isNextNotation ? ";" : "\n"}` 
                        : ''

                    return `${ a }.${ curNum }. ${ text }${ countRes }`
                }).join('\n  ')

                return `${ a }. ${ b } ${ c }${ d }\n  ${ e }`.trim();
            })
            .join('\n\n ')
        const copiedValue = `${ title }:\n ${ todosChildren }`
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