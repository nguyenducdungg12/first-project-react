import React from 'react'
import Banner_item from './banner_item'
export default function banner() {
    return (
        <div className="banner">
            <div className="row m-0">
                <div className="col-12 col-lg-6 p-0">
                    <Banner_item intro='ON ACCESORIES' title='SALE' percent='30%' img='https://images8.alphacoders.com/109/thumb-1920-1090661.jpg'></Banner_item>
                </div>
                <div className="col-12 col-lg-6 p-0">
                    <Banner_item intro='IN BAGS EXCEPTING THE NEW COLLECTION' title='DESIGNER' percent='BAGS' img='https://images2.alphacoders.com/108/thumb-1920-1084642.jpg'></Banner_item>
                </div>
            </div>
        </div>
    )
}
