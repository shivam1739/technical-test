import React, { useEffect, useRef } from 'react'
import { styled } from "styled-components"
import { getColor, getRadius } from '../utils/commanUtils'

const Board = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }, []);



    const handleDraw = (e) => {
        const board = canvasRef.current
        const ctx = board.getContext("2d")
        const x = e.clientX - board.getBoundingClientRect().left
        const y = e.clientY - board.getBoundingClientRect().top
        const radius = getRadius()
        const color = getColor()
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()
    }



    return (
        <StyledBoard >
            <StyledCanvas ref={canvasRef} id='board' onClick={(e) => handleDraw(e)} />
        </StyledBoard>
    )
}
const StyledBoard = styled('div')`
width: 100%;
height: 50vh;
border:solid black 1px;
`

const StyledCanvas = styled('canvas')`
width: 100%;
height:100%;
`



export default Board