import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './not-found.module.scss'
import { FilledButton } from '../../elements'

const NotFound = () => {
    const navigate = useNavigate();

    const onGoHome = () => {
        navigate('/')
    }

    return (
        <div className={styles.notFound}>
            <h1>Are you lost?</h1>
            <p>Sorry, we can't find that page.</p>

            <FilledButton onClick={onGoHome}>
                <p>Go Home</p>
            </FilledButton>
        </div>
    )
}

export default NotFound