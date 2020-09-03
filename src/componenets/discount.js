import React from 'react'

function Discount() {
    return (
        <div className="header__discount">
                <div className="row m-0">
                    <div className="col-12 col-lg-4 p-0 header__discount__bg">
                        <div className="header__discount__item">
                            <p className="header__discount__item__title">
                            Free Shipping & Returns
                            </p>
                            <p className="header__discount__item__content">
                            BUY NOW
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 p-0 header__discount__bg">
                        <div className="header__discount__item">
                                <p className="header__discount__item__title">
                                20% Discount for all dresses
                                                                </p>
                                <p className="header__discount__item__content">
                                USE CODE: Colorlib
                                </p>
                            </div>
                        </div>
                    <div className="col-12 col-lg-4 p-0 header__discount__bg">
                        <div className="header__discount__item">
                                <p className="header__discount__item__title">
                                20% Discount for students

                                </p>
                                <p className="header__discount__item__content">
                                USE CODE: Colorlib
                                </p>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default Discount;