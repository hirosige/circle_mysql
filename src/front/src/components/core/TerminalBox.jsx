import React, { Component } from "react";
import Styled from "styled-components";
import Config from 'Src/config'
import { Media } from 'Utilities/style'

const Terminal = Styled.div.attrs({
    _exclude: 'isCollapsed'
})`
    width: 100%;
    position: relative;
    background-color: #fff;
    border-color: rgba(0, 0, 0, .3);
    padding: 72px 0px 0px 0px;
    box-sizing: border-box;
    border-radius: 5px;
        
    ${Media.sm`
        width: 100%;
    `}
    
    ${props => props.isCollapsed && `
        height: 0px;
        overflow: hidden;
    `}
`;

const Bar = Styled.div`
	background: #e5e5e5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 6px 15px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    height: 48px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    
    &:before {
      font-size: 1.1rem;
      content: 'user@${Config.SITE_DOMAIN}: /${props => props.location}';
      color: #171717;
      position: absolute;
      width: 100%;
      text-align: center;
      top: 18px;

      ${Media.xs`
        font-size: .9rem;
      `}

      @media (max-width: 320px) {
          font-size: .75rem;
      }
            

      
    }
`;

const Button = Styled.div`
	display: inline-block;
    float: left;
    border-radius: 50%;
    width: 26px;
    height: 26px;
    line-height: 26px;
    margin-right: 5px;
    transition: all 600ms ease;
    text-align: center;
    font-weight: bold;
    box-sizing: content-box;
    font-size: 18px;
    user-select: none;
`;

const Collapse = Button.extend`
    border: 1px solid #9e9e9e;
    background: #c1c1c1;
    z-index: 1;

    &:hover {
      background: #34c84a;
    }
`;

const Text = Styled.div`
    color: inherit;
`;


class TerminalBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCollapsed: false
        };

        this.handleCollapseClick = this.handleCollapseClick.bind(this);

    }

    handleCollapseClick() {
        this.setState((prevState, props) => ({
            isCollapsed: !prevState.isCollapsed
        }));
    }

    render() {
        return (
            <Terminal isCollapsed={this.state.isCollapsed}>
                <Bar location={this.props.location}>
                    <Collapse onClick={this.handleCollapseClick}>
                        {this.state.isCollapsed ? '+' : <span>&ndash;</span>}
                    </Collapse>
                </Bar>
                <Text>
                    {this.props.children}
                </Text>
            </Terminal>
        )
    }
}

export default TerminalBox;