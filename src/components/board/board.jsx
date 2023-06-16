import React, { useEffect } from "react";

import { useBoard } from "../../componentHooks";
import Cell from "./cell";
import styles from './board.module.scss'

const Board = () => {
    const { models, operations } = useBoard()

    useEffect(() => {
        operations.initGame()
    }, [])

    return (
        <div>
            {models.cells != null && (
                <div className={styles.board}>
                    <div className={styles.gameBoardContainer} aria-label="Game Board">
                        {models.cells.map((rowArray, rowIndex) => (
                            <div className={styles.row} key={`game-row-${rowIndex}`}>
                                {rowArray.map((cell, columnIndex) => {
                                    return <Cell
                                        key={`cell-${rowIndex}-${columnIndex}`}
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
            )}
        </div>
    )
}

export default Board
