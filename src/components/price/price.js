/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import cn from 'classname';
import styles from './price.module.css';
import PropTypes from 'prop-types';

const Price = ({ product, order }) => {
    const [activeTab, setActiveTab] = useState(0);

    const priceGoldAlt = product.priceGoldAlt;// цена по карте за м.кв., 
    const priceRetailAlt = product.priceRetailAlt;// цена стандартная за м.кв.

    const priceGold = product.priceGold; // цена по карте за упаковку
    const priceRetail = product.priceRetail; // цена стандартная за упаковку

    const tabs = [
        {title: 'За м.кв', card: priceGoldAlt, std: priceRetailAlt},
        {title: 'За упаковку', card: priceGold, std: priceRetail},
    ];
    return (
        <div>
            <div className={styles.price}>
                <span><a className={styles.availability} href="#">Наличие</a></span>
                <div className={styles.card}>
                    <div><p>Цена по карте клуба</p></div>
                    <div className={styles.card__price}>
                        <p className={styles.card__price_card}>{(order === undefined) ? tabs[activeTab].card.toFixed(2) : ((tabs[activeTab].card) * order).toFixed(2)}$</p>
                        <p className={styles.card__price_std}>{(order === undefined) ? tabs[activeTab].std.toFixed(2) : ((tabs[activeTab].std) * order).toFixed(2)}$</p>
                    </div>
                </div>
                <p className={styles.bonus}>можно купить за {product.bonusAmount.toFixed(2)} балла</p>
                <div className={styles.tabs}>
                    {tabs.map(({ title }, index) => (
                    <span key={title} className={cn(styles.tabs, {[styles.active]: index === activeTab})} onClick={() => setActiveTab(index)}>{title}</span>   
                    ))}
                </div>
            </div>
        </div>

    )
};

Price.propTypes = {
    product: PropTypes.object,
    order: PropTypes.number,
}

const mapStateToProps = (state, props) => ({
    product: state.products.products[props.id],
    order: state.order[props.id],
});

export default connect(mapStateToProps)(Price);