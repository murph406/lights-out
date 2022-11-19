import React from "react";
import { FilledButton } from "../../elements";

import styles from './welcome.module.scss'

const LandingPage = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.headlineContainer}>
                <h1>
                    <span className={styles.small}>Welcome to</span>
                    <br />
                    <span className={styles.fontPurple}>Lights</span>
                    <span className={styles.fontGreen}>Out</span>

                </h1>

                <p className={styles.detailText}>LightsOut is based on a simple concept. Clicking on a cell toggles that cell and each of its immediate neighbors. The goal is to turn out all the lights, ideally with the minimum number of clicks.</p>

                <FilledButton text={"Get Started"}/>
            </div>
        </div>
    )
}

export default LandingPage
