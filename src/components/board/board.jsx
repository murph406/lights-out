import React, { useEffect } from "react";

import { useBoard } from "../../hooks";
import Cell from "./cell";
import styles from './board.module.scss'

 const Board = () => {
    const { models, operations } = useBoard()

    useEffect(() => {
        operations.initGame()
    }, [])

    return (
        <div>
            {models.cells !== null
                ?
                <div className={styles.board}>
                    <div className={styles.gameBoardContainer} aria-label="Game Board" key="game-board-test-id" >
                        {models.cells.map((rowArray, rowIndex) => (
                            <div className={styles.row} key={"game-row-" + rowIndex.toString()}>
                                {rowArray.map((cell, columnIndex) => {
                                    const cellId = `cell-${rowIndex}-${columnIndex}`

                                    return <Cell
                                        id={cellId}
                                        key={cellId}
                                        active={cell}
                                        onClick={() => operations.onClickCell([rowIndex, columnIndex])}
                                    />
                                })}
                            </div>
                        )
                        )}
                    </div>
                    <p>
                        <span>Total Moves: </span>
                        <span>{models.numOfMoves}</span>
                    </p>
                </div>
                : null
            }
        </div>
    )
}

export default Board



    // const [cells, setCells] = useState(null)
    // const [numOfMoves, setNumOfMoves] = useState(0)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     initGame()
    // }, [])

    // useEffect(() => {
    //     if (hasWon()) {
    //         navigate(ROUTES.WON)
    //     }

    // }, [cells]);

    // const initGame = () => {
    //     setNumOfMoves(0)
    //     setCells(setCellMatrix())
    // }

    // const onClickCell = (id) => {
    //     const position = getCellPosition(id)
    //     const cellPositionMatrix = getAdjacentCells(position)
    //     const newMatrix = getUpdatedCellMatrix(cellPositionMatrix)

    //     setNumOfMoves((prevState) => prevState + 1)
    //     setCells([...newMatrix])
    // }

    // const getUpdatedCellMatrix = (cellPositionMatrix) => {
    //     for (var i = 0; i < cellPositionMatrix.length; i++) {
    //         cells[cellPositionMatrix[i][0]][cellPositionMatrix[i][1]] = cells[cellPositionMatrix[i][0]][cellPositionMatrix[i][1]] === 0 ? 1 : 0
    //     }

    //     return cells
    // }

    // const hasWon = () => {
    //     if (cells === null) return false

    //     for (var i = 0; i < cells.length; i++) {
    //         for (var j = 0; j < cells[i].length; j++) {
    //             if (cells[i][j] === 1) {
    //                 return false
    //             }
    //         }
    //     }

    //     return true
    // }

    // const getAdjacentCells = (position) => {
    //     let cellPositionMatrix = [position]
    //     const topCell = [position[0], position[1] - 1]
    //     const bottomCell = [position[0], position[1] + 1]
    //     const rightCell = [position[0] + 1, position[1]]
    //     const leftCell = [position[0] - 1, position[1]]

    //     if (0 <= topCell[1] && topCell[1] <= BOARD_SIZE - 1) {
    //         cellPositionMatrix.push(topCell)
    //     }

    //     if (0 <= bottomCell[1] && bottomCell[1] <= BOARD_SIZE - 1) {
    //         cellPositionMatrix.push(bottomCell)
    //     }

    //     if (0 <= rightCell[0] && rightCell[0] <= BOARD_SIZE - 1) {
    //         cellPositionMatrix.push(rightCell)
    //     }

    //     if (0 <= leftCell[0] && leftCell[0] <= BOARD_SIZE - 1) {
    //         cellPositionMatrix.push(leftCell)
    //     }

    //     return cellPositionMatrix
    // }

    // const getCellPosition = (id) => {
    //     let position = id.split("cell-")
    //     position = position[1].split('-')

    //     return [Number(position[0]), Number(position[1])]
    // }

    // const setCellMatrix = () => {
    //     return Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => randomInt(0, 1)))
    // }

