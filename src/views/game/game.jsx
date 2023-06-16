import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

import EventBus from '../../services/event-bus'
import styles from './game.module.scss'
import { FilledButton } from '../../components'
import { ROUTES } from "../../routes/routes";
import { Board } from "../../components";

const GamePage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        EventBus.on('gameStatus:won', navigateWinPage)
    }, [])

    const navigateWinPage = () => {
        navigate(ROUTES.WON)

    }

    const restartGame = () => {
        EventBus.dispatch('gameStatus:restart')
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

            <Board />

            <div className={styles.footerContainer}>
                <Link to={ROUTES.ROOT}>Go Home</Link>
                <FilledButton text={"Restart"} onClick={restartGame} />
            </div>
        </div>
    )
}

export default GamePage;

