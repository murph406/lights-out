import React from "react";
import styles from './filled-button.module.scss'

const FilledButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={styles.filledButton}>
            {children}
        </button>
    )
}

export default FilledButton