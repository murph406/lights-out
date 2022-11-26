import React from "react";
import styles from './filled-button.module.scss'

const FilledButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.filledButton}>
            <p className={styles.buttonFont}>{text}</p>
        </button>
    )
}

export default FilledButton