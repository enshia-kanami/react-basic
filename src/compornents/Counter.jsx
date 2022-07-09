import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    const countUp = () => {
        setCount(prveState => prveState + 1)
    }
    const countDown = () => {
        setCount(prveState => prveState - 1)
    }

    useEffect( () => {
        console.log('現在のカウント', count)
    }, [count])

    return (
        <div>
            <p>カウント{count}</p>
            <button onClick={countUp}>Up</button>
            <button onClick={countDown}>Down</button>
        </div>
    )
}

export default Counter;