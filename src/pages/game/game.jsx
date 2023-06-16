import React from "react";
import { Link } from "react-router-dom";

import styles from './game.module.scss'
import { FilledButton } from '../../components'
import { ROUTES } from "../../routes/routes";
import { Board } from "../../components";

const GamePage = () => {
    return (
        <div className={styles.game}>
            <div className={styles.headlineContainer}>
                <h1>
                    <span className={styles.fontPurple}>Lights</span>
                    <span className={styles.fontGreen}>Out</span>
                </h1>

                <p>Turn out the lights!</p>
            </div>

            <Board />

            <div className={styles.footerContainer}>
                <Link to={ROUTES.ROOT}>Go Home</Link>
                <FilledButton text={"Restart"} />
            </div>
        </div>
    )
}

export default GamePage;

