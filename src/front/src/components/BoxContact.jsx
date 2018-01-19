import React, { Component } from 'react';
import Container from 'Components/core/Container';
import ContentBox from 'Components/core/ContentBox';
import TerminalBox from 'Components/core/TerminalBox';
import FormContact from 'Components/FormContact';
import Styled from "styled-components";
import { Media } from "Utilities/style"
import BlinkCursor from "Components/core/BlinkCursor";
import { Button, Col, message, Row } from 'antd';

const googleMapUrl = 'https://goo.gl/maps/t9zjKFMxmLP2';

const ContentWrapper = Styled(Container)`
    margin: 30px auto;
`;

const Content = Styled(ContentBox)`
`;

const Centered = Styled.div`
    text-align: center;
    padding-bottom: 20px;
`;

const MapWrapper = Styled.div`
    margin-top: -20px;
    position: relative;
    width: 100%;
    height: 500px;
`;

const MapImage = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const MapDetail = Styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    max-width: 90%;
    padding: 20px;
    background: #444444;
    color: whitesmoke;
    font-size: 1.15rem;
    
    & h2 {
      color: whitesmoke;
    }

    &:after {
      position: absolute;
      content: '';
      top: 99%;
      left: 50%;
      transform: translateX(-50%);
      border: solid transparent;
      border-width: 13px;
      border-top-color: #444444;
    }
`;

const JoinUs = Styled.div`
    background-color: #444444;
    text-align: center;
    color: whitesmoke;

    & h1 {
      color: whitesmoke;
    }
`;


class ContactBox extends Component {
    constructor(props) {
        super(props);

        this.handleSendUsSubmit = this.handleSendUsSubmit.bind(this);
        this.handleJoinUsClick  = this.handleJoinUsClick.bind(this);
    }

    handleSendUsSubmit(e) {
        e.preventDefault();
        const {t} = this.props;
        message.error(<span dangerouslySetInnerHTML={{__html: t('home.error.temporarily-unavailable')}}/>);
    };

    handleJoinUsClick() {
        const {t} = this.props;
        message.error(<span dangerouslySetInnerHTML={{__html: t('home.error.feature-coming-soon')}}/>);
    }

    render() {
        const {t} = this.props;
        return (
            <ContentWrapper>
                <TerminalBox location="Contact Us">
                    {/*<Content>*/}
                        {/*<Centered>*/}
                            {/*<h1>*/}
                                {/*<span dangerouslySetInnerHTML={{__html: t('home.content.contact-get-in-touch-title')}}/>*/}
                                {/*<BlinkCursor/>*/}
                            {/*</h1>*/}
                            {/*<p dangerouslySetInnerHTML={{__html: t('home.content.contact-get-in-touch-description')}}/>*/}
                        {/*</Centered>*/}
                    {/*</Content>*/}
                    {/*<MapWrapper>*/}
                        {/*<MapImage src="/public/images/map.jpg" alt=""/>*/}
                        {/*<MapDetail>*/}
                            {/*<Centered>*/}
                                {/*<h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-map-title')}}/>*/}
                                {/*<p dangerouslySetInnerHTML={{__html: t('home.content.contact-map-detail')}}/>*/}
                                {/*<Button type="primary" ghost size="large" href={googleMapUrl}>*/}
                                    {/*<span dangerouslySetInnerHTML={{__html: t('home.content.contact-map-button')}}/>*/}
                                {/*</Button>*/}
                            {/*</Centered>*/}
                        {/*</MapDetail>*/}
                    {/*</MapWrapper>*/}
                    {/*<Content>*/}
                        {/*<Row gutter={32}>*/}
                            {/*<Col sm={24} md={12}>*/}
                                {/*<h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-send-us-title')}}/>*/}
                                {/*<FormContact {...this.props} />*/}
                            {/*</Col>*/}
                            {/*<Col sm={24} md={12}>*/}
                                {/*<h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-map-title')}}/>*/}
                                {/*<p dangerouslySetInnerHTML={{__html: t('home.content.contact-map-detail')}}/>*/}

                                {/*<h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-title')}}/>*/}
                                {/*<div*/}
                                    {/*dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-phone')}}/>*/}
                                {/*<div*/}
                                    {/*dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-email')}}/>*/}
                                {/*<div*/}
                                    {/*dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-facebook')}}/>*/}
                            {/*</Col>*/}
                        {/*</Row>*/}
                    {/*</Content>*/}

                    <Content>
                        <Centered>
                            <h1>
                                <span dangerouslySetInnerHTML={{__html: t('home.content.contact-get-in-touch-title')}}/>
                                <BlinkCursor/>
                            </h1>
                            <p dangerouslySetInnerHTML={{__html: t('home.content.contact-get-in-touch-description')}}/>
                        </Centered>
                        <Row gutter={32}>
                            <Col sm={24} md={12}>
                                {/*<h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-send-us-title')}}/>*/}
                                {/*<FormContact {...this.props} />*/}
                                <MapWrapper>
                                    <MapImage src="/public/images/map.jpg" alt=""/>
                                    <MapDetail>
                                        <Centered>
                                            <h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-map-title')}}/>
                                            <p dangerouslySetInnerHTML={{__html: t('home.content.contact-map-detail')}}/>
                                            <Button type="primary" ghost size="large" href={googleMapUrl}>
                                                <span dangerouslySetInnerHTML={{__html: t('home.content.contact-map-button')}}/>
                                            </Button>
                                        </Centered>
                                    </MapDetail>
                                </MapWrapper>
                            </Col>
                            <Col sm={24} md={12}>
                                <h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-map-title')}}/>
                                <p dangerouslySetInnerHTML={{__html: t('home.content.contact-map-detail')}}/>

                                <h2 dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-title')}}/>
                                <div
                                    dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-phone')}}/>
                                <div
                                    dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-email')}}/>
                                <div
                                    dangerouslySetInnerHTML={{__html: t('home.content.contact-direct-contact-facebook')}}/>
                            </Col>
                        </Row>
                    </Content>

                    <JoinUs>
                        <Content>
                            <h1>
                                <span dangerouslySetInnerHTML={{__html: t('home.content.contact-join-us-title')}}/>
                                <BlinkCursor/>
                            </h1>
                            <p dangerouslySetInnerHTML={{__html: t('home.content.contact-join-us-description')}}/>
                            <Button type="primary" ghost size="large" onClick={this.handleJoinUsClick}>
                                <span dangerouslySetInnerHTML={{__html: t('home.content.contact-join-us-button')}}/>
                            </Button>
                        </Content>
                    </JoinUs>
                </TerminalBox>
            </ContentWrapper>
        )
    }

}

export default ContactBox;