import React, { PureComponent } from 'react'

class ProductMenu extends PureComponent {
    constructor(props) {
        super(props)

    }
    onClick = (e)=>{
        var type = parseInt(e.target.getAttribute('data-set'));
        this.props.onChangeMenu(type);
    }
    render() {
            var {type} = this.props;
        return (
            <ul className="product__menu">
                <li className={type==1 ? 'product__menu__item active_menu' : 'product__menu__item'} data-set={1} onClick={this.onClick}>
                    All
                </li>
                <li className={type==2 ? 'product__menu__item active_menu' : 'product__menu__item'} data-set={2} onClick={this.onClick}>
                    WOMAN
                </li>
                <li className={type==3 ? 'product__menu__item active_menu' : 'product__menu__item'} data-set={3} onClick={this.onClick}>
                   MAN
                </li>
                <li className={type==4 ? 'product__menu__item active_menu' : 'product__menu__item'} data-set={4} onClick={this.onClick}>
                    ACCESSORIES
                </li>
                <li className={type==5 ? 'product__menu__item active_menu' : 'product__menu__item'} data-set={5} onClick={this.onClick}>
                    SHOES
                </li>
                <li className={type==6 ? 'product__menu__item active_menu' : 'product__menu__item'} data-set={6} onClick={this.onClick}>
                    KIDS
                </li>

            </ul>
        )
    }
}

export default ProductMenu