import { useEffect, useState } from 'react'
import EventBus from '../../services/event-bus'


export const BOARD_SIZE = 5

export const useBoard = (actions) => {
    const [cells, setCells] = useState(null)
    const [numOfMoves, setNumOfMoves] = useState(0)


    useEffect(() => {
        EventBus.on('gameStatus:restart', initGame)
    }, [])

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min) + min)
    }

    const onClickCell = (cellPosition) => {
        const cellPositionMatrix = getAdjacentCells(cellPosition)
        const newMatrix = getUpdatedCellMatrix(cellPositionMatrix)

        const hasWon = getGameStatus(newMatrix)

        if (hasWon) {
            EventBus.dispatch('gameStatus:won')
            return
        }

        setNumOfMoves((prevState) => prevState + 1)
        setCells([...newMatrix])
    }

    const getUpdatedCellMatrix = (cellPositionMatrix) => {
        for (var i = 0; i < cellPositionMatrix.length; i++) {
            cells[cellPositionMatrix[i][0]][cellPositionMatrix[i][1]] = cells[cellPositionMatrix[i][0]][cellPositionMatrix[i][1]] === 0 ? 1 : 0
        }

        return cells
    }

    const getAdjacentCells = (position) => {
        let cellPositionMatrix = [position]
        const topCell = [position[0], position[1] - 1]
        const bottomCell = [position[0], position[1] + 1]
        const rightCell = [position[0] + 1, position[1]]
        const leftCell = [position[0] - 1, position[1]]

        if (0 <= topCell[1] && topCell[1] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(topCell)
        }

        if (0 <= bottomCell[1] && bottomCell[1] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(bottomCell)
        }

        if (0 <= rightCell[0] && rightCell[0] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(rightCell)
        }

        if (0 <= leftCell[0] && leftCell[0] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(leftCell)
        }

        return cellPositionMatrix
    }


    const getGameStatus = (updatedCells) => {
        for (var i = 0; i < updatedCells.length; i++) {
            for (var j = 0; j < updatedCells[i].length; j++) {
                if (updatedCells[i][j] === 1) {
                    return false
                }
            }
        }

        return true
    }

    const initGame = () => {
        const cells = initBoardMatrix()

        setNumOfMoves(0)
        setCells(cells)
    }

    const initBoardMatrix = () => Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => getRandomInt(0, 1)))

    return {
        models: {
            cells,
            numOfMoves
        },
        operations: {
            getGameStatus,
            getUpdatedCellMatrix,
            getAdjacentCells,
            initBoardMatrix,
            initGame,
            onClickCell
        }
    }
}
