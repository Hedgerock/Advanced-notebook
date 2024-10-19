import { useEffect, useRef } from "react";

export const useMoveToChild = () => {

    const destination = useRef(null);

    useEffect(() => {
        destination?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, [destination])

    return { destination }
}