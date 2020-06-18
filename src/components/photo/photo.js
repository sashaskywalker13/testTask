/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Photo = ({ url }) => {
    function urlPhoto() {
        const name = url.primaryImageUrl.split('.');
        name[name.length - 2] = name[name.length - 2] + '_220x220_1';
        return name.join('.');
    };


    return (
        <div>
            <img src={urlPhoto()} alt=''/>
        </div>
    )
};

Photo.propTypes = {
    url: PropTypes.object,
};

export default connect((state, props) => ({
    url: state.products.products[props.id],
}))(Photo);