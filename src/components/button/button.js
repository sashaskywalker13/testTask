import React from 'react';
import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ id }) => {
    return (
        <div>
            <button className={styles.button} data-product-id={id}>В корзину</button>
        </div>
    )
};

Button.propTypes = {
    id: PropTypes.string,
}

export default Button;