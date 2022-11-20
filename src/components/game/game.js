import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from './game.module.scss'
import { randomInt } from "../../helpers";
import { Cell, FilledButton } from "../../elements";
import { PATH } from "../../routes/routes";

const BOARD_SIZE = 5

const Game = () => {
    const [cells, setCells] = useState(null)
    const [numOfMoves, setNumOfMoves] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        initGame()
        return () => null
    }, [])

    useEffect(() => {
        if (hasWon()) {
            navigate(PATH.WON)
        }

        return () => null
    }, [cells]);

    const initGame = () => {
        setCells(setCellMatrix())
    }

    const onClickCell = (id) => {
        const position = getCellPosition(id)
        const cellPositionMatrix = getAdjacentCells(position)
        const newMatrix = getUpdatedCellMatrix(cellPositionMatrix)

        setNumOfMoves(numOfMoves + 1)
        setCells([...newMatrix])
    }

    const getUpdatedCellMatrix = (cellPositionMatrix) => {
        for (var i = 0; i < cellPositionMatrix.length; i++) {
            cells[cellPositionMatrix[i][0]][cellPositionMatrix[i][1]] = cells[cellPositionMatrix[i][0]][cellPositionMatrix[i][1]] === 0 ? 1 : 0
        }

        return cells
    }

    const hasWon = () => {
        if (cells === null) return false

        for (var i = 0; i < cells.length; i++) {
            for (var j = 0; j < cells[i].length; j++) {
                if (cells[i][j] === 1) {
                    return false
                }
            }
        }

        return true
    }

    const getAdjacentCells = (position) => {
        let cellPositionMatrix = [position]
        const top = [position[0], position[1] - 1]
        const bottom = [position[0], position[1] + 1]
        const right = [position[0] + 1, position[1]]
        const left = [position[0] - 1, position[1]]

        if (0 <= top[1] && top[1] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(top)
        }

        if (0 <= bottom[1] && bottom[1] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(bottom)
        }

        if (0 <= right[0] && right[0] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(right)
        }

        if (0 <= left[0] && left[0] <= BOARD_SIZE - 1) {
            cellPositionMatrix.push(left)
        }

        return cellPositionMatrix
    }

    const getCellPosition = (id) => {
        let position = id.split("cell-")
        position = position[1].split('-')

        return [Number(position[0]), Number(position[1])]
    }

    const setCellMatrix = () => {
        return Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => randomInt(0, 1)))
    }

    return (
        <div className={styles.game}>
            <div className={styles.headlineContainer}>
                <h1>
                    <span className={styles.fontPurple}>Lights</span>
                    <span className={styles.fontGreen}>Out</span>
                </h1>

                <p>Turn out the lights!</p>
            </div>

            {cells !== null
                ?
                <div>
                    <div className={styles.contentContainer}>
                        {cells.map((rowArray, rowIndex) => (
                            <div className={styles.row}>
                                {rowArray.map((cell, columnIndex) => {
                                    const cellId = "cell-" + rowIndex + "-" + columnIndex
                                    return <Cell
                                        key={cellId}
                                        active={cell === 1 ? true : false}
                                        onClick={() => onClickCell(cellId)}
                                    />
                                })}
                            </div>
                        )
                        )}
                    </div>
                    <p>Total Moves: {numOfMoves}</p>
                </div>
                : null
            }

            <div className={styles.footerContainer}>
                <Link to={PATH.ROOT}>Go Home</Link>
                <FilledButton text={"Restart"} onClick={initGame} />
            </div>
        </div>
    )
}

export default Game;

