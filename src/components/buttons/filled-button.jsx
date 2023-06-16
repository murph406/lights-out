import React from "react";
import { useButton } from "../../hooks";
import styles from './filled-button.module.scss'

 const FilledButton = ({ text, onClick }) => {
    const { operations } = useButton()

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

export default FilledButton
