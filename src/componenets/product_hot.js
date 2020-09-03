import React from 'react'
import Button from './button'
export default function product_hot() {
    return (
        <div className="product__hot">
            <div className="product__hot__content">
                <h3 className="product__hot__content__title">
                 WHITE T-SHIRT
                </h3>
                <p className="product__hot__content__note">
                     * Free shipping until 25 Dec 2017
                </p>
                <p className="product__hot__content__price">
                    <span>$25.90</span> $15.90
                </p>
                <Button name='SHOP NOW'></Button>
            </div>
        </div>
    )
}
