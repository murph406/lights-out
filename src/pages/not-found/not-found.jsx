import React from "react";
import { useNavigate } from "react-router-dom";

import styles from './not-found.module.scss'
import { FilledButton } from '../../components'
import { ROUTES } from "../../routes";

const NotFoundPage = () => {
    const navigate = useNavigate();

    const onGoHome = () => {
        navigate(ROUTES.ROOT)
    }

    return (
        <div className={styles.notFound}>
            <h1>Are you lost?</h1>
            <p>Sorry, we can't find that page.</p>

            <FilledButton onClick={onGoHome} text={'Go Home'} />
        </div>
    )
}

export default NotFoundPage