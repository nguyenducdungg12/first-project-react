import React, { PureComponent } from 'react'
import ProductMenu from './productMenu'
import Product_item from './product_item'
class ProductContainer extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            type:1,
            list : [
            {
                img:'https://images3.alphacoders.com/109/thumb-1920-1091378.jpg',
                price:39.9,
                name:'jean',
                type:2,
            },
           
            {
                img:'https://w.wallhaven.cc/full/ym/wallhaven-ymodlg.jpg',
                price:39.9,
                name:'jean',
                type:3,
            },   
            {
                img:'https://images2.alphacoders.com/108/thumb-1920-1084642.jpg',
                price:39.9,
                name:'jean',
                type:4,
            },
           
            {
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhjU-bdfp52HGEBDgkB99VBqGQi4P9GB0vzw&usqp=CAU',
                price:39.9,
                name:'jean',
                type:5,
            },
            {
                img:'https://images2.alphacoders.com/108/thumb-1920-1084642.jpg',
                price:39.9,
                name:'jean',
                type:6,
            },,
            {
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTf_5wkCUaHWKQquEjqSAK7cA71Z6-rDYd__A&usqp=CAU',
                price:39.9,
                name:'jean',
                type:2,
            },
            {
                img:'https://cdn.miscellaneoushi.com/1920x1080/20121025/brunettes%20women%20actress%20victoria%20justice%20celebrity%20smiling%20singers%20earrings%20white%20background%201920_www.miscellaneoushi.com_78.jpg',
                price:39.9,
                name:'jean',
                type:3,
            },
            {
                img:'https://images3.alphacoders.com/109/thumb-1920-1091378.jpg',
                price:39.9,
                name:'jean',
                type:4,
            },
                  
            ]
        }
      
    }
    onChangeMenu = (type)=>{
        this.setState({
            type:type,
        })
    }
    render() {
        var {list,type} = this.state;
        var filter = list.filter((item)=>item.type==type||type==1);
        var showProduct =filter.map((item,index)=><Product_item key={index} info={item} type={type}></Product_item>)
        return (
            <div className="product">
                <div className="container">
                    <h2 className="product__title">
                    NEW ARRIVALS
                    </h2>
                    <ProductMenu onChangeMenu = {this.onChangeMenu} type={type}/>
                    <div className="row">
                        {showProduct}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductContainer