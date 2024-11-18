import { useGetActions } from "./useGetActions";

export const useGetCounted = ({ data, setData, modificator, childId, currentValue, status, isExistedTodo, parentId }) => {
    const { changeValue } = useGetActions({ data, modificator, childId })

    const incrementer = () => {
        if (!status) return;
        const newValue = currentValue + 1;

        if (isExistedTodo) {
            setData(prev => ({...prev, value: newValue}))
            return;
        }

        setData(prev => changeValue({
                currentData: prev, 
                newValue, 
                key: 'changeCount'
            })
        );
    }
    
    const decrementer = () => {
        if (!status) return;
        const decrementer = currentValue - 1
        const newValue = decrementer <= 0 ? 1 : decrementer;

        if (isExistedTodo) {
            setData(prev => ({...prev, value: newValue}))
            return;
        }

        setData(prev => changeValue({
            currentData: prev, 
            newValue, 
            key:'changeCount'
        }));
    }

    const counterHandler = (e) => {
        if (!status) return;
        const newValue = Number(e.target.value) <= 0 ? 1 : Number(e.target.value);

        if (isExistedTodo) {
            setData(prev => ({...prev, value: newValue}))
            return;
        }

        setData(prev => changeValue({
            currentData: prev, 
            newValue, 
            key: 'changeCount'
        }));
    }

    const calcHandler = () => {
        const newValue = !status;

        if (isExistedTodo) {
            setData({status: newValue, value: 1})
            return;
        }

        setData(prev => changeValue({
            currentData: prev, 
            newValue, 
            key:'changeStatus'
        }));
    }

    return { incrementer, decrementer, counterHandler, calcHandler }
}