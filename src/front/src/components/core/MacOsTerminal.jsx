import React, { Component } from "react";
import Styled from "styled-components";
import Config from 'Src/config'
import AutosizeInput from 'react-input-autosize';
import { Media } from 'Utilities/style'

const Terminal = Styled.div`
    width: 550px;
    height: 330px;
    position: relative;
    background-color: rgba(0, 0, 0, .7);
    border-color: rgba(0, 0, 0, .8);
    padding: 30px 8px 0px 8px;
    box-sizing: border-box;
    box-shadow: 0 0 25px rgba(0, 0, 0, .5);
    border-radius: 5px;
    overflow: hidden;
        z-index: 50;

    
    ${Media.sm`
        min-width: 250px;
        width: 100%;
    `}
    
    ${Media.xs`
        min-width: 250px;
        width: 100%;
    `}
`;

const Bar = Styled.div`
	background: #f9f9f3;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 6px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
    min-height: 13px;
    box-sizing: content-box;
    z-index: 100;
    
    ${props => props.hasMoveCursorAtBar && `
      cursor: move;
    `}
    
    &:before {
      font-size: 12px;
      content: 'user@${Config.SITE_DOMAIN}: ~/${Config.SITE_NAME}';
      color: #171717;
      position: absolute;
      width: 100%;
      text-align: center;
      top: 4px;
    }
`;

const Button = Styled.div`
    display: inline-block;
    float: left;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-right: 5px;
`;

const Close = Button.extend`
    background: #fc635d;
`;

const Min = Button.extend`
    background: #fdbc40;
`;

const Max = Button.extend`
    background: #34c84a;
`;

const Content = Styled.div`
    width: 565px;
    height: 300px;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }
    
    ${Media.sm`
        min-width: 250px;
        width: 100%;
    `}
    
    ${Media.xs`
        min-width: 250px;
        width: 100%;
    `}
    
`;

const Text = Styled.span`
    color: whitesmoke;
    font-size: .9rem;
    line-height: 1.55em;

    & a {
      color: inherit;
    }
`;

const Message = Text.extend`
    ${props => props.isCommand && `
      &:first-letter {
        color: #f2796b;
        font-size: 1.3em;
      }
    
      &:before {
        color: #6ecdca;
        content: '➜ ${Config.SITE_NAME} '; 
      }
    `}
    
    ${props => props.isSuccess && `
      color: #34c84a;
    `}
    
    ${props => props.isError && `
      color: #f24636;
    `}
`;

// const StyledAutosizeInput = Styled(AutosizeInput).attrs({
//     _exclude: 'blink'
// })`
//     & input {
//         font-family: inherit;
//         padding: 0;
//         margin: 0;
//         background: none;
//         border: none;
//         font-size: 14px;
//         outline: none;
//         color: transparent;
//         text-shadow: 0 0 0 whitesmoke;
// 	}
//
// 	&:after {
//       content: '_';
//     }
//
//     ${props => props.blink && `
//       &:after {
//         animation: blinker 1s linear infinite;
//       }
//
//       @keyframes blinker {
//         50% { opacity: 0; }
//       }
//     `}
//
// `;

const StyledAutosizeInput = Styled.input`
    background: transparent;
    outline: none;
    border: none;
`;


class MacOsTerminal extends Component {

    render() {
        return (
            <Terminal className="macos-terminal">
                <Bar className="macos-terminal-bar" hasMoveCursorAtBar={this.props.hasMoveCursorAtBar}>
                    {/*<Close/>*/}
                    {/*<Min/>*/}
                    {/*<Max/>*/}
                </Bar>
                <Content>
                    <Text>
                        {this.props.children}
                    </Text>
                </Content>
            </Terminal>
        )
    }
}

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userCommandValue: '',
            userCommandStyle: true,
            isEntered:        false,
            stackPosition:    null,
        };

        this.handleChange   = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleKeyDown  = this.handleKeyDown.bind(this);
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.focus();
    }

    handleChange(event) {
        this.setState({
            userCommandValue: event.target.value,
        });

        this.setState((prevState, props) => ({
            userCommandStyle: !prevState.userCommandStyle
        }));
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.setState((prevState, props) => ({
                isEntered: !prevState.isEntered
            }));
            this.props.onEntered(this.state.userCommandValue);
        }
    }

    handleKeyDown(event) {
        const arrows = [38, 40];
        if (arrows.includes(event.keyCode)) {
            event.preventDefault();

            const { typedStack } = this.props;
            let { stackPosition } = this.state;

            if(stackPosition === null && typedStack !== 'undefined') {
                stackPosition = typedStack.length - 1;
            } else {
                if (event.keyCode === 38) {
                    stackPosition--;
                }

                if (event.keyCode === 40) {
                    stackPosition++;
                }
            }

            if(stackPosition >= typedStack.length - 1) {
                stackPosition = typedStack.length - 1
            }

            if(stackPosition <= 0) {
                stackPosition = 0
            }

            console.log(stackPosition);
            this.setState({
                userCommandValue: typedStack[stackPosition],
                stackPosition: stackPosition,
            });
        }
    }

    render() {
        return (
            <span>
                {this.state.isEntered ?
                    this.state.userCommandValue
                    : <StyledAutosizeInput blink={this.state.userCommandStyle.toString()}
                                           value={this.state.userCommandValue}
                                           onChange={this.handleChange}
                                           onKeyPress={this.handleKeyPress}
                                           onKeyDown={this.handleKeyDown}
                                           innerRef={(input) => {
                                               this.textInput = input;
                                           }}
                                           maxLength={25}
                                           autoFocus="autoFocus"
                    />
                }
            </span>

        )
    }
}

export default MacOsTerminal;
export { Message, Input };