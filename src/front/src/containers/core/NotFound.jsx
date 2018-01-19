import React, { Component } from "react";
import MacOsTerminal, { Message, Input } from "Components/core/MacOsTerminal";
import AsciiArt from "Components/core/AsciiArt";
import Helmet from "react-helmet";
import Draggable from "react-draggable";
import ContainerFlexFullScreen from "Components/core/ContainerFlexFullScreen";
import Typist from "react-typist";
import Moment from 'react-moment';
import { getLanguageUrl } from "Utilities/url";
import { Link } from "react-router-dom"
import { translate } from "react-i18next";


const helmetConfig =
          <Helmet
              title="Page not found"
          />
;

const StyledContainerFlexFullScreen = ContainerFlexFullScreen.extend`
    //background: #cfc7f8; 
    //background: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
`;

const typistOption = {
    cursor: {
        show: false,
        // blink:        true,
        // element:      '_',
        // hideWhenDone: false,
    }
};

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state               = {
            firstMessage:      '',
            isHiddenMessage01: false,
            isHiddenMessage02: false,
            isHiddenMessage03: false,
            entered:           [],
            terminalInputs:    [],
            typedStack:        [],

        };
        this.handleTypingDone    = this.handleTypingDone.bind(this);
        this.handleTerminalClick = this.handleTerminalClick.bind(this);
        this.handleEntered       = this.handleEntered.bind(this);

    }

    componentDidMount() {
        this.setState({
            firstMessage:
                <Message>Last login: <Moment format="ddd MMM DD HH:mm:ss"/> on ttys007
                    <AsciiArt/>
                </Message>
        });
    }

    handleTypingDone(id) {
        return () => {
            setTimeout(() => {
                this.setState((prevState, props) => ({
                    [`isHiddenMessage${id}`]: !prevState[`isHiddenMessage${id}`]
                }));
            }, 250);

        }
    }

    handleTerminalClick(event) {
        if (this.userCommandInternalInput != 'undefined'
            && this.userCommandInternalInput != null) {
            this.userCommandInternalInput.focusTextInput();
        }
    }

    handleEntered(command) {
        const {i18n} = this.props;

        let message;
        let terminalInputs = this.state.terminalInputs;
        let typedStack = this.state.typedStack;

        switch (command) {
            case "go-back-home":
                message = (
                    <Message isSuccess>Redirecting to Home...<br/></Message>
                );
                setTimeout(() => {
                    // TODO
                    this.props.history.push(getLanguageUrl('/', 'en'))
                }, 200)
                break;
            case "":
                message = null;
                break;
            default:
                message = <Message isError>System: Command not found<br/></Message>;
                break;
        }

        if (command != '') {
            typedStack.push(command);
        }

        terminalInputs.push(
            <div key={terminalInputs.length}>
                {message}
                <Message isCommand/>
                <Input
                    onEntered={this.handleEntered}
                    ref={(input) => this.userCommandInternalInput = input}
                    typedStack={typedStack}/>
            </div>
        );
        this.setState({
            terminalInputs: terminalInputs,
            typedStack: typedStack,
        })
    }

    render() {
        const {i18n} = this.props;

        return (
            <StyledContainerFlexFullScreen center middle>
                {helmetConfig}
                <Draggable
                    handle=".macos-terminal-bar"
                    bounds="body">
                    <div onClick={this.handleTerminalClick}>
                        <MacOsTerminal hasMoveCursorAtBar>
                            {/* Terminal Login Greeting */}
                            {this.state.firstMessage}

                            {/* 404 Report */}
                            <Typist startDelay={400}
                                    avgTypingDelay={10}
                                    cursor={typistOption.cursor}
                                    onTypingDone={this.handleTypingDone('01')}>
                                <Message isCommand>echo "404 PAGE NOT FOUND"<br/></Message>
                            </Typist>
                            {this.state.isHiddenMessage01 ?
                                <Message isError>404 PAGE NOT FOUND<br/></Message>
                                : null}

                            {/* Go Back Home */}
                            <Typist startDelay={1600}
                                    avgTypingDelay={10}
                                    cursor={typistOption.cursor}
                                    onTypingDone={this.handleTypingDone('02')}>
                                <Message isCommand>yarn global add create-go-back<br/></Message>
                            </Typist>
                            {this.state.isHiddenMessage02 ?
                                <div>
                                    <Message isSuccess>Success Installed "go-back-home@9.9.0".<br/></Message>
                                    <Message isSuccess>Done in 1.62s.<br/></Message>
                                    <Message isSuccess>
                                        Type "go-back-home"
                                        {/*TODO*/}
                                        or click<Link to={getLanguageUrl('/', 'en')}> <strong>
                                        <ins>go-back-home</ins>
                                    </strong> </Link>
                                        for going back home.<br/></Message>
                                    <Message isCommand/>
                                    <Input
                                        onEntered={
                                            this.handleEntered
                                        }
                                        ref={(input) => {
                                            this.userCommandInternalInput = input;
                                        }}/>
                                </div>
                                : null}

                            {this.state.terminalInputs.map((value, index) => {
                                return value;
                            })}

                        </MacOsTerminal>
                    </div>
                </Draggable>
            </StyledContainerFlexFullScreen>
        )
    }
}

export default translate()(NotFound);