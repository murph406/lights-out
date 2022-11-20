import React from "react";
import cx from 'classnames'
import PropTypes from 'prop-types';

import styles from './cell.module.scss'


const Cell = ({ active, onClick }) => {
    return <div className={cx(styles.cell, { [styles.active]: active })} onClick={onClick} />
}

export default Cell


Cell.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func
};

Cell.defaultProps = {
    active: true,
    onClick: () => null
}