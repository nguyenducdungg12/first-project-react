import React, { PureComponent } from 'react'
import FooterMain from './footerMain'
import FooterSocial from './footerSocial'
class FooterContainer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="footer">
                <FooterMain/>
                <FooterSocial/>
            </div>
        )
    }
}

export default FooterContainer