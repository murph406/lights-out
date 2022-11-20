import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from './game.module.scss'
import { randomInt } from "../../helpers";
import { Cell, FilledButton } from "../../elements";
import { PATH } from "../../routes/routes";

const BOARD_SIZE = 5

const Game = () => {
    const [cells, setCells] = useState(null)
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
        let cellPositionMatrix = []

        const position = getCellPosition(id)
        cellPositionMatrix.push(position)

        const newMatrix = getUpdatedCellMatrix(cellPositionMatrix)
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

    const getAdjacentCells = () => {

    }

    const getCellPosition = (id) => {
        let position = id.split("cell-")
        position = position[1].split('-')

        return position
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
                ? <div className={styles.contentContainer}>
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
                : null
            }

            <div className={styles.footerContainer}>
                <Link to={PATH.ROOT}>Go Home</Link>
                <FilledButton text={"Start Over"} onClick={initGame} />
            </div>
        </div>
    )
}

export default Game;

