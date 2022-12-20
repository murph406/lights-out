import React from "react";
import { useButton } from "./button";
import styles from './filled-button.module.scss'

export const FilledButton = ({ text, onClick }) => {
    const { models, operations } = useButton()

    const onClickExtension = () => {
        operations.increment()

        onClick()
    }

    return (
        <button onClick={onClickExtension} className={styles.filledButton}>
            <p className={styles.buttonFont}>{text}</p>
        </button>
    )
}
