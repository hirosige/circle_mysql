import React, { Component } from 'react'
import Styled from 'styled-components';
import ContentBox from 'Components/core/ContentBox'
import { Button } from 'antd'

const BannerWrapper = Styled.div`
    width: 100%;
    background-color: #bd5152;
    color: whitesmoke;
    padding-top: 0;
    padding-bottom: 0;
    position: relative;
    
    ${props => props.isClosed && `
        display: none;
    `}
`;

const BannerContent = Styled(ContentBox)`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 90%;
    margin: 0 auto;
    padding: 10px 40px;
    box-sizing: border-box;
`;

const BannerText = Styled.div``;

const BannerButton = Styled(Button)`
    margin-left: 10px;
`;

const BannerClose = Styled.div`    
    display: none;
    position: absolute;
    top: 50%;
    right: 20px;
    width: 14px;
    height: 14px;
    transform: translateY(-50%);
    cursor: pointer;
    

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      background: #FFFFFF;
      width: 100%;
      height: 1.5px;
      border-radius: 2px;
      transform-origin: center;
    }

    &:before {
      transform: translate(-50%, -50%) rotate(-45deg);

    }

    &:after {
      transform: translate(-50%, -50%) rotate(45deg);

    }
    
    ${props => props.closable && `
        display: block;
    `}
`;


class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isClosed: false
        };

        this.handleCloseClick = this.handleCloseClick.bind(this);
    }

    handleCloseClick() {
        this.setState((prevState, props) => ({
            isClosed: !prevState.isClosed
        }));
    }

    render() {

        return (
            <BannerWrapper isClosed={this.state.isClosed}>
                <BannerContent>
                    <BannerText/>
                    <span dangerouslySetInnerHTML={{__html: this.props.text}}/>
                    {this.props.button ?
                        <BannerButton ghost href={this.props.button.href}>
                            <span dangerouslySetInnerHTML={{__html: this.props.button.name}}/>
                        </BannerButton>
                        : null}
                </BannerContent>
                <BannerClose closable={this.props.closable} onClick={this.handleCloseClick}/>
            </BannerWrapper>
        )
    }
}

export default Banner;