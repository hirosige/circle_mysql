import React, { Component } from 'react'
import Banner from 'Components/core/Banner'
import { getLanguageUrl } from "Utilities/url";

class BannerNews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bannerInfo: {}
        }
    }

    componentWillMount() {
        const {i18n}     = this.props;
        const bannerInfo = {
            text:   'Hey friend, check out our <b>new and improved</b> website!',
            // button: {
            //     name: 'Explore',
            //     href: getLanguageUrl('/', i18n.language),
            // },
            closable: true
        };

        this.setState({
            bannerInfo: bannerInfo
        });
    }

    render() {
        return (
            <div>
                {this.state.bannerInfo
                    ? <Banner {...this.state.bannerInfo} />
                    : null}
            </div>
        )
    }
}

export default BannerNews;