import { useEffect, useState } from "react";

export const useGetCounted = ({ data, setData, modificator, childId, currentValue }) => {
    const [ curCount, setCurCount ] = useState(currentValue);
    const [ isCounted, setIsCounted ] = useState(data.count.status)

    useEffect(() => {
        setData(prev => {
            return prev.map(el => {

                if (!modificator) {
                    return el.id === data.id
                        ? {...el, count: {...el.count, status: isCounted}, notation: {...el.notation, value: el.notation.value.map(val => {
                            return {...val, count: {...val.count, status: isCounted, value: 1 }}
                            }
                        )}}
                        : el
                }

                return el.id === data.id
                    ? {...el, notation: {...el.notation, value: el.notation.value.map(val => {
                        return val.id === childId
                            ? {...val, count: {...val.count, status: isCounted}}
                            : val
                        }
                    )}}
                : el

            })
        })

    }, [isCounted, data.id, setData, childId, modificator])

    useEffect(() => {
        setData(prev => {
            return prev.map(el => {
               if (!modificator) {
                return el.id === data.id
                    ? {...el, count: {...el.count, value: curCount}, notation: {...el.notation, value: el.notation.value.map(val => {
                        return {...val, count: {...val.count, derivative: curCount * val.count.value}}
                        }
                    )} }
                    : el
                }

                return el.id === data.id
                    ? {...el, notation: {...el.notation, value: el.notation.value.map(val => {
                        return val.id === childId
                            ? {...val, count: {...val.count, value: curCount, derivative: curCount * data.count.value}}
                            : val
                        }
                    )}}
                    : el
            })
        })
    }, [curCount, data.id, setData, modificator, childId, data.count.value ])

    const incrementer = () => {
        if (!isCounted) return;

        setCurCount(prev => {
            return prev + 1;
        })
    }
    
    const decrementer = () => {
        if (!isCounted) return;

        setCurCount(prev => {
            const res = prev - 1;
            return res <= 0 ? 1 : res
        })
    }

    const counterHandler = (e) => {
        if (!isCounted) return;

        const curVal = e.target.value.length ? e.target.value : 1;
        setCurCount(+curVal)
    }

    const calcHandler = () => {

        setIsCounted(prev => {
            return !prev
        });

        if (isCounted) {
            setCurCount(1);
        }
    }

    return { curCount, setCurCount, isCounted, setIsCounted, incrementer, decrementer, counterHandler, calcHandler }
}