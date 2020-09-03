import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpenMenu :true,
        }
    }
    componentDidMount(){
        window.onresize = ()=>{
            if (window.innerWidth<700){
                this.setState({
                    isOpenMenu:false,
                })
            }
        };
    }
    onClick = ()=>{
        this.props.onOpenSideBar();
    }
    onToggleMenu =()=>{
        if(window.innerWidth<700){
            console.log(this);
            this.setState({
                isOpenMenu:!this.state.isOpenMenu,
            })
        }
    }
    
    render() {
        return (
            <div className="header">
            <div className="container">
                <div className="header__top__wrap">
                    <img src="https://colorlib.com/preview/theme/karl/img/core-img/logo.png" alt=""class='header__top__wrap__img'/>
                    <div className="header__top__wrap__right">
                        <div className="header__top__wrap__right__cart">
                           <i class="fas fa-shopping-cart"></i>
                        </div>
                        <p className="header__top__wrap__right__price">
                            Your card $0
                        </p>
                        <div className="header__top__wrap__right__menu" onClick={this.onClick}>
                            <i class="fas fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__nav">
                 <div className="container">
                     <div className="header__nav__wrap">
                         <div className="header__nav__social">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-instagram"></i>   
                                <i class="fab fa-github"></i>    
                                <i class="fab fa-linkedin-in"></i>
                        </div>
                       <div className="header__nav__navbar__dropdown" onClick={this.onToggleMenu}>
                           <div className="header__nav__navbar__icon">
                                   <i class="fas fa-bars"></i>
                           </div>
                        <ul className="header__nav__navbar" style={this.state.isOpenMenu ? {display:'flex'} : {}}>
                                <li className="header__nav__navbar__item">
                                    Home
                                </li>
                                <li className="header__nav__navbar__item">
                                    Pages <i class="fas fa-caret-down"></i>
                                </li>
                                <li className="header__nav__navbar__item">
                                Dresses
                                </li>
                                <li className="header__nav__navbar__item">
                                Shoes
                                </li>
                                <li className="header__nav__navbar__item">
                                    contact
                                </li>
                            </ul>
                       </div>
                        <div className="header__nav__contac">
                        <i class="fas fa-headphones"></i> +0377752897
                        </div>
                     </div>
                 </div>
            </div>
            
        </div>
        )
    }
}
