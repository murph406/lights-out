import React from "react";
import cx from 'classnames'
import PropTypes from 'prop-types';

import styles from './cell.module.scss'


const Cell = ({ active, onClick, id }) => {
    return <button data-testid={id} className={cx(styles.cell, { [styles.active]: active === 1 })} onClick={onClick} aria-label={"Toggle " + id} >{active}</button>
}

export default Cell


Cell.propTypes = {
    id: PropTypes.string,
    active: PropTypes.number,
    onClick: PropTypes.func
};

Cell.defaultProps = {
    id: '',
    active: 1,
    onClick: () => null
}