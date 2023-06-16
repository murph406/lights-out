import React from "react";
import cx from 'classnames'
import { Link, useNavigate } from "react-router-dom";

import styles from './won.module.scss'
import { FilledButton } from '../../components'
import { ROUTES } from "../../routes/routes";

const WonPage = () => {
    const navigate = useNavigate();

    const onPlayAgain = () => {
        navigate(ROUTES.GAME)
    }

    return (
        <div className={styles.won}>

            <div className={styles.headlineContainer}>
                <h1>
                    <span className={cx(styles.fontPurple, styles.small)}>You</span>
                    <span className={styles.small}> are a </span>
                    <span className={styles.fontGreen}>Winner</span>
                    <span>!</span>
                </h1>
                <p>Nice job!</p>
            </div>

            <div className={styles.buttonContainer}>
                <Link to={ROUTES.ROOT}>Go Home</Link>
                <FilledButton onClick={onPlayAgain} text={'Play Again'} />
            </div>
        </div>
    )
}

export default WonPage