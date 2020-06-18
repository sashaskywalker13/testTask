import React from 'react';
import { connect } from 'react-redux';
import styles from './product.module.css';
import PropTypes from 'prop-types';

import Counter from '../counter';
import Photo from '../photo';
import Description from '../description';
import Price from '../price';
import Button from '../button';

const Product = ({ id }) => {
    return (
        <div>
            <div className={styles.product}>
                <div className={styles.photo}>
                    <Photo id={id}/>
                </div>
                <div className={styles.description}>
                    <Description id={id}/>
                </div>
                <div className={styles.price}>
                    <Price id={id}/>
                    <Counter id={id}/>
                    <Button id={id} />
                </div>
            </div>
        </div>
    )

};

Product.propTypes = {
    id: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
    // product: productSelector(state, props);
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

