import { useState } from "react";
import { initialNotation, todoFormInterface } from "../../data";

export const useGetContentInputData = () => {
    const initialData = [todoFormInterface({ id: Date.now() + 1, content: '', notation: initialNotation })];
    const initialMainData = [{ id: Date.now(), contentValue: initialData, isReady: false, title: '', currentTodoText: ''  }];
    const [ contentInputData, setContentInputData ] = useState(initialMainData)

    const setDefaultData = () => {

        setContentInputData(initialMainData);

    }

    return { setDefaultData, contentInputData, setContentInputData }
}