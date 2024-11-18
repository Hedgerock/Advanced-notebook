import { useCountContext } from "./useCountContext";

export const useGetList = () => {
    const { data } = useCountContext();
    const list = data.notation
        .filter(val => val.text)
        .sort((a,b) => b.count.derivative === a.count.derivative 
            ? a.text.localeCompare(b.text) 
            : b.count.derivative - a.count.derivative
    )

    const total = list.reduce((acc, item) => acc + item.count.derivative, 0);

    return { data, list, total }
}
