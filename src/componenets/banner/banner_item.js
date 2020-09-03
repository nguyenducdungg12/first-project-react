import React from 'react'
import Button from '../button'
export default function Banner_item(props){
    return (
        <div className="banner__item" style={{backgroundImage:`url(${props.img})`}}>
            <div className="banner__item__content">
                <p className="banner__item__content__intro">
                {props.intro}
                </p>
                <p className="banner__item__content__title">
                    {props.title}
                </p>
                <p className="banner__item__content__percent">
                    {props.percent}
                </p>
                <Button name='SHOP NOW'></Button>
            </div>
        <div className="banner__item__bg"></div>
    </div>
    )
}
