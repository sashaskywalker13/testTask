import React from 'react';
import { connect } from 'react-redux';
import styles from './description.module.css';
import PropTypes from 'prop-types';

const Description = ({ product }) => {
    const code = product.code;
    const title = product.title;
    const goods = product.assocProducts.split('/n');
    return (
        <div>
            <div className={styles.description}>
                <p className={styles.code}>код: {+code}</p>
                <div className={styles.title}>{title}</div>
                <div className={styles.goods}>
                    <span className={styles.goods__bold}>Могут понадобиться: </span>
                    {goods.map((item) => (
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a className={styles.goods} key={item} href='#'>{item}</a>))}
                </div>
            </div>
        </div>
    )
};

Description.propTypes = {
    product: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
    product: state.products.products[props.id],
});

export default connect(mapStateToProps)(Description);