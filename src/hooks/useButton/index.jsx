import React, { useCallback, useState } from 'react'


export const useButton = (actions) => {
    const [clickCount, setClickCount] = useState(0)

    const increment = useCallback(() => {
        setClickCount((prevState) => prevState + 1)
    }, [])

    return {
        models: { clickCount },
        operations: { increment }
    }
}