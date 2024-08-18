import React, { useEffect, useState } from 'react'

const MouseMovePosition = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const getMousePosition = (e) => {
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        window.addEventListener("mousemove", getMousePosition);

        return ()=>{
            window.removeEventListener("mousemove",getMousePosition)
        }
    }, [])
    return (
        <div>
            <h1>X:- {x}</h1>
            <h1>Y:- {y}</h1>
        </div>
    )
}

export default MouseMovePosition