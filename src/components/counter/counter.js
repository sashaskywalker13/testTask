import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './counter.module.css';

import { increment, decrement } from '../../redux/actions';

const Counter = ({ id, increment, decrement, amount = 0 }) => {

    return (
        <div>
            <div className={styles.counter}>
                <button className={styles.counter__button} onClick={() => decrement(id)}>-</button> 
                    {amount}
                <button className={styles.counter__button} onClick={() => increment(id)}>+</button>
            </div>
        </div>
    )
};

Counter.propTypes = {
    id: PropTypes.string,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    amount: PropTypes.number,
}

const mapStateToProps = (state, props) => ({
    amount: state.order[props.id],
});

const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
