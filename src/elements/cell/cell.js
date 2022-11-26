import React from "react";
import cx from 'classnames'
import PropTypes from 'prop-types';

import styles from './cell.module.scss'


const Cell = ({ active, onClick, id }) => {
    return <div data-testid={id} className={cx(styles.cell, { [styles.active]: active })} onClick={onClick} alt={id}/>
}

export default Cell


Cell.propTypes = {
    id: PropTypes.string,
    active: PropTypes.bool,
    onClick: PropTypes.func
};

Cell.defaultProps = {
    id: '',
    active: true,
    onClick: () => null
}