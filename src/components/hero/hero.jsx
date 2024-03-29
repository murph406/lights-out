import React from "react";
import { useNavigate } from "react-router-dom";
import { FilledButton } from "../../elements";
import { PATH } from "../../routes/routes";

import styles from './hero.module.scss'

const HeroPage = () => {
    const navigate = useNavigate()

    const onNavGame = () => {
        navigate(PATH.GAME)
    }

    return (
        <div className={styles.hero}>
            <div className={styles.headlineContainer}>
                <h1>
                    <span className={styles.small}>Welcome to</span>
                    <br />
                    <span className={styles.fontPurple}>Lights</span>
                    <span className={styles.fontGreen}>Out</span>
                </h1>

                <p className={styles.detailText}>LightsOut is based on a simple concept. Clicking on a cell toggles that cell and each of its adjacent neighbors. The goal is to turn out all the lights, ideally with the minimum number of clicks.</p>

                <FilledButton text={"Let's Play!"} onClick={onNavGame} />
            </div>
        </div>
    )
}

export default HeroPage
