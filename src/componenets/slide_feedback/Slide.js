    import React, { PureComponent } from 'react'
import Button from '../button'
class Slide extends PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        var {index,info,currentSlide} = this.props;
        return (
            <div className="slide__feedback__item">
                <span className="slide__feedback__item__quote">"</span>
                <p className="slide__feedback__item__content">
                    {info.content}
                </p>
                <div className="slide__feedback__item__user">
                    <img src={info.img} alt="" className='slide__feedback__item__user__img'/>
                    <div className="slide__feedback__item__uer__main">
                        <p className="slide__feedback__item__uer__main__name">{info.name}</p>
                        <p className="slide__feedback__item__uer__main__address">{info.address}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide