import { useCallback, useMemo, useReducer, useRef, useState } from "react"




const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [isDark, setIsDark] = useState(false)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }

    const isEven = useMemo(() => {
        console.log('isEven is calling');
        let i = 0
        while (i < 1000000000) {
            i++
        }
        if (counter % 2 === 0) return true
    }, [counter])

    return (
        <div>
            <h1>{counter}  {isEven ? "Even" : "Odd"}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>RESET</button>

            <button onClick={() => setIsDark(!isDark)}>{isDark ? "Dark" : "Light"}</button>
        </div>
    )
}

export default Counter