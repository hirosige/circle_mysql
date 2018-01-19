import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from 'Components/Header';
import Hero from 'Components/Hero';
import BoxCompanyGreeting from 'Components/BoxCompanyGreeting';
import BoxContact from 'Components/BoxContact';
import BoxLatestPost from 'Components/BoxLatestPost';
import Footer from 'Components/Footer';
import { translate } from 'react-i18next';
import BannerNews from 'Components/BannerNews.jsx';

const helmetConfig =
          <Helmet
              title="Welcome to ARMS"
          />
    ;

class Home extends Component {

    render() {
        return (
            <div>
                {helmetConfig}
                <BannerNews {...this.props} />
                <Header {...this.props} activatedMenu='home' />
                <Hero {...this.props} />
                <BoxCompanyGreeting {...this.props} />
                <BoxLatestPost {...this.props} />
                <BoxContact {...this.props} />
                <Footer {...this.props} />
            </div>
        )
    }
}

export default translate()(Home);