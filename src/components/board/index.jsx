import React, { useEffect } from "react";

import { useBoard } from "../../hooks";
import { Cell } from "../cell";
import styles from './board.module.scss'

export const Board = ({ }) => {
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
                                    const cellId = "cell-" + rowIndex + "-" + columnIndex
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
