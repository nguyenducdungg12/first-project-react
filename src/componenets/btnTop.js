import React, { Component } from 'react'

export default class btnTop extends Component {
    onTop = ()=>{
        console.log(window);
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }
    render() {
        return (
            <div className='btn-top' onClick={this.onTop}>
                <i class="fas fa-chevron-up"></i>
             </div>
        )
    }
}
