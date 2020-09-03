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
                    name:'Michelle Williams',
                    address:'Client, Los Angeles',
                    content:'Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. ',
                },
                {
                    img:'https://images3.alphacoders.com/109/thumb-1920-1091378.jpg',
                    name:'Michelle Williams',
                    address:'Client, Los Angeles',
                    content:'Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. ',
                },
                {
                    img:'https://images3.alphacoders.com/109/thumb-1920-1091378.jpg',
                    name:'Michelle Williams',
                    address:'Client, Los Angeles',
                    content:'Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. Aliquam finibus nulla quam, a iaculis justo finibus non. Suspendisse in fermentum nunc.Nunc pulvinar molestie sem id blandit. Nunc venenatis interdum mollis. ',
                },
            ]
        }
    }
    componentDidMount(){
        /* setInterval(() => {
            this.loopSlide();
        }, 7000); */
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
            currentSlide:parseInt(e.target.getAttribute('data-set')),
        })
    }
    render() {
        var {list,currentSlide} = this.state;
        var showSlide = list.map((item,index)=><Slide key ={index} info = {item} index={index} currentSlide={currentSlide}></Slide>)
        return (
            <div className="feedback">
                <h2 className="feedback__title">
                TESTIMONIALS
                </h2>
                <div className="slide__feedback">
                    <div className="slide__feedback__container" >
                        <div className="slide__feedback__container__show" style={{transform:`translateX(-${(currentSlide)*100}%)`}}>
                           {showSlide}
                        </div>
                    </div>
                <div className="slider__feedbak__control">
                    <div className="slider__feedbak__dot" data-set={0} onClick={this.onClick} style={currentSlide==0 ? {background:'#ff084e'} : {}}>
                    </div>
                    <div className="slider__feedbak__dot" data-set={1} onClick={this.onClick} style={currentSlide==1 ? {background:'#ff084e'} : {}}>       
                    </div>
                    <div className="slider__feedbak__dot" data-set={2} onClick={this.onClick} style={currentSlide==2 ? {background:'#ff084e'} : {}}>   
                     </div>
                </div>
                </div>
            </div>
            )}
}

export default Slider;