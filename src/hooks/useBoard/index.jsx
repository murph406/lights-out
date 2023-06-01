import React, { useCallback, useState } from 'react'
import { randomInt } from '../../helpers'

export const BOARD_SIZE = 5

export const useBoard = (actions) => {
    const [cells, setCells] = useState(null)
    const [numOfMoves, setNumOfMoves] = useState(0)

    const onClickCell = (cellPosition) => {
        console.log("CELL POSITION::", cellPosition)
        setNumOfMoves((prevState) => prevState + 1)
    }

    const getCellPosition = (position) => {
        // let position = id.split("cell-")
        // position = position[1].split('-')

        // return [Number(position[0]), Number(position[1])]
    }

    const initGame = () => {
        setNumOfMoves(0)
        setCells(initBoardMatrix())
    }

    const initBoardMatrix = () => Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => randomInt(0, 1)))

    return {
        models: {
            cells,
            numOfMoves
        },
        operations: {
            initBoardMatrix,
            initGame,
            onClickCell
        }
    }
}