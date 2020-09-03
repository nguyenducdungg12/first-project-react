import Slide from './Slide'
import React, { PureComponent } from 'react'

class Slider extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            currentSlide:0,
            list : [
                {
                    img:'https://images3.alphacoders.com/109/thumb-1920-1091378.jpg',
                    note:'*Only today we offer free shipping',
                    title:'Woman Fashion',
                },
                {
                    img:'https://images8.alphacoders.com/108/thumb-1920-1082368.jpg',
                    note:'*Only today we offer free shipping',
                    title:'Woman Fashion',
                },
                {
                    img:'https://cdn.wallpapersafari.com/14/57/0fSKc7.jpg',
                    note:'*Only today we offer free shipping',
                    title:'Woman Fashion',
                },
            ]
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.loopSlide();
        }, 7000);
    }
    loopSlide = ()=>{
        var {currentSlide} = this.state;
        if (currentSlide>=2){
            this.setState({
                currentSlide:0,
            })
        }
       else{
         this.setState({
                currentSlide:this.state.currentSlide+1,
         })
       }
    }
    onClick = (e)=>{
        this.setState({
            currentSlide:e.target.getAttribute('data-set'),
        })
    }
    render() {
        var {list,currentSlide} = this.state;
        var showSlide = list.map((item,index)=><Slide key ={index} info = {item} index={index} currentSlide={currentSlide}></Slide>)
        return (
            <div className="slider" >
                <div className="slider__container" style={{transform:`translateX(-${(currentSlide)*100}%)`}}>
                    {showSlide}
                </div>
                <div className="slider__control">
                    <div className="slider__dot" data-set={0} onClick={this.onClick} style={currentSlide==0 ? {background:'#ff084e'} : {}}>
                    </div>
                    <div className="slider__dot" data-set={1} onClick={this.onClick} style={currentSlide==1 ? {background:'#ff084e'} : {}}>       
                    </div>
                    <div className="slider__dot" data-set={2} onClick={this.onClick} style={currentSlide==2 ? {background:'#ff084e'} : {}}>   
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;