import React from 'react'

export default function footerMain() {
    return (
        <div className='footer__container'>
            <div className="row">
                    <div className="col-lg-3 mb-5">
                        <div className="footer__container__wrap">
                            <img src="https://colorlib.com/preview/theme/karl/img/core-img/logo.png" alt=""className='footer__container__wrap__img'/>
                            <p className="footer__container__wrap__content">
                            Copyright ©2020 All rights reserved | This template is made with by Colorlib
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 mb-5">
                        <ul className="footer__container__list">
                            <li className="footer__container__item">
                                About
                            </li>
                            <li className="footer__container__item">
                                Blog
                            </li>
                            <li className="footer__container__item">
                               Fag
                            </li>
                            <li className="footer__container__item">
                               Returns
                            </li>
                            <li className="footer__container__item">
                                Contact
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 mb-5">
                    <ul className="footer__container__list">
                            <li className="footer__container__item">
                                My Account
                            </li>
                            <li className="footer__container__item">
                                Shipping
                            </li>
                            <li className="footer__container__item">
                               Our Policies
                            </li>
                            <li className="footer__container__item">
                               Afiliates
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-5 mb-5">
                        <h4 className="footer__container__title">
                        Subscribe to our newsletter
                        </h4>
                        <div className="footer__container__form">
                        <input type="text" placeholder='Your email here' className='footer__container__input'/>
                        <button className='footer__container__button'>SUBCRIBE</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
