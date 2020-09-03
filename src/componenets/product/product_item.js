import React, { PureComponent } from 'react'
class Product_item extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModal : false,
        }
    }
    onOpenModal =()=>{
        this.setState({
            isOpenModal:true,
        })
    }
    onCloseModal = ()=>{
        this.setState({
            isOpenModal:false,
        })
    }
    render() {
        var {info} = this.props;
        var {isOpenModal} = this.state;
        return (
            <div className="col-12 col-lg-4">
                <div className='product__item'>
                    <div className="product__item__main">
                      <img src={info.img} alt="" className="product__item__img"/>
                      <div className="product__item__main__plus" onClick={this.onOpenModal}>
                          <i class="fas fa-plus"></i>
                      </div>
                    </div>
                    <div className="product__detail">
                        <p className="product__detail__price">
                            {`$${info.price}`}
                        </p>
                        <p className="product__detail__name">
                            {info.name}
                        </p>
                    </div>
                    <a href="#" className="product__item__add">ADD TO CART</a>
                </div>
                <div className="product__modal" style={isOpenModal ? {display:'block'} : {display:'none'}}>
                    <div className="row">
                        <div className="col-4">
                            <img src={info.img} alt="" className="product__modal__img"/>
                        </div>
                        <div className="col-8">
                            <div className="product__modal__detail">
                                <p className="product__modal__detail__name">
                                Boutique Silk Dress
                                </p>
                                <div className="product__modal__detail__star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <p className="product__modal__detail__price">
                                 $120.99 <span>$130</span>
                                </p>
                                <p className="product__modal__detail__desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia expedita quibusdam aspernatur, sapiente consectetur accusantium perspiciatis praesentium eligendi, in fugiat?
                                </p>
                                <a href="#" className="product__modal__detail__view">View Full Product Details</a>
                                <div className="product__modal__detail__buy">
                                    <div className="product__modal__detail__buy__quantity">
                                        <span className="product__modal__detail__buy__quantity__btn product__modal__detail__buy__quantity__minus ">
                                        <i class="fas fa-minus"></i>
                                        </span>
                                           <input type="number"/>
                                        <span className="product__modal__detail__buy__quantity__btn product__modal__detail__buy__quantity__plus">
                                        <i class="fas fa-plus"></i>
                                        </span>

                                    </div>
                                    <button className="product__modal__detail__add">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal__close" onClick={this.onCloseModal}>
                         <i class="fas fa-times"></i>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Product_item