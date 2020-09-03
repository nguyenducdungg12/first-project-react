import React, { PureComponent } from 'react'
import Button from '../button'
class Slide extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        var {index,info,currentSlide} = this.props;
        return (
            <div className="slider__wrap">
                <img src={info.img} alt="" className="slider__img"/>
                <div className="slider__content" style={currentSlide==index ? {display: 'block'} : {}}>
                    <span className="slider__content__note">
                        {info.note}
                    </span>
                    <span className="slider__content__title">
                        {info.title}
                    </span>
                    <Button name='SHOP COLLECTION'></Button>
                </div>
            </div>
        )
    }
}

export default Slide