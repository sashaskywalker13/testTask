import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadProducts } from '../../redux/actions';

import Product from '../product';
import Loader from '../loader';

const Products = ({ products, loaded, loadProducts, loading }) => {

    useEffect(() => {
        if(!loaded && !loading) loadProducts();
    }, []); // eslint-disable-line

    if (loading || !loaded) {
        return (
            <div>
                <Loader />
            </div>
        )
    };

    return (
        <div>
            {products.map((id) => (
                <Product key={id} id={id}/>
            ))
            }
        </div>
    )

};

Products.propTypes = {
    products: PropTypes.array,
    loaded: PropTypes.bool,
    loading: PropTypes.bool,
    loadProducts: PropTypes.func,
  };

const mapStateToProps = (state) => ({
    products: Object.keys(state.products.products),
    loaded: state.products.loaded,
    loading: state.products.loading,
});
const mapDispatchToProps = {
    loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
