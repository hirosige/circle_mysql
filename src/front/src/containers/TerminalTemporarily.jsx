import React, { Component } from "react";
import MacOsTerminal, { Message, Input } from "Components/core/MacOsTerminal";
import Helmet from "react-helmet";
import Draggable from "react-draggable";
import ContainerFlexFullScreen from "Components/core/ContainerFlexFullScreen";
import AsciiArt from "Components/core/AsciiArt";
import Typist from "react-typist";
import Moment from 'react-moment';
import { getLanguageUrl } from "Utilities/url";
import { Link } from "react-router-dom"
import { translate } from "react-i18next";

import Header from 'Components/Header.jsx';
import BannerNews from 'Components/BannerNews.jsx';


const helmetConfig =
          <Helmet
              title="Welcome to ARMS"
          />
;

const StyledContainerFlexFullScreen = ContainerFlexFullScreen.extend`
    height: 100%;
    padding-top: 50px;
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
            case "tiny":
                message = (
                    <div>
                        <Message isSuccess>
                            This is tiny command, Full feature is comming soon.
                            <br/>
                        </Message>
                    </div>);
                break;
            case "tiny help":
                message = (
                    <div>
                        <Message isSuccess>
                            Usage: tiny [command]
                            <br/>
                            Commands:
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- ls team
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- ls blog
                            <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;- ls partners
                            <br/>
                        </Message>
                    </div>);
                break;
            case "tiny ls team":
                message = (
                    <div>
                        <Message isSuccess>
                            Done in 0.{Math.floor((Math.random() * 80) + 1)}s.
                            <br/>
                        </Message>
                        <Message>
                            <strong><ins>Leader</ins></strong><br/>
                            <strong>Matsushita: </strong>The best CEO !!<br/>
                            <strong>Hirosige: </strong>The coolest CTO~<br/>
                            <strong>Kakuyama: </strong>Hansome man<br/>
                            <strong>Bando: </strong>Oldest PM!!!!<br/>
                            <strong>Yuji: </strong>SARMS PM<br/>
                            <strong>Miura: </strong>SARMS PM<br/>
                            <br/>
                            <strong><ins>Cute Staff</ins></strong><br/>

                            <strong>A, Ake, Big, May, Preaw, Ton, Tarm , Jajar </strong><br/>
                            <strong>Kong, Boss, Tue, Tor, Yo, James, Win </strong><br/>
                            <br/>
                        </Message>
                    </div>
                );
                break;
            case "tiny ls blog":
                message = (
                    <div>
                        <Message isSuccess>
                            Done in 0.{Math.floor((Math.random() * 80) + 1)}s.
                            <br/>
                        </Message>
                        <Message>
                            <strong>New Website available now</strong>
                            <br/>Hey friend, check out our new and improved website!
                            <br/>
                        </Message>
                    </div>
                );
                break;
            case "tiny ls partners":
                message = (
                    <div>
                        <Message isSuccess>
                            Done in 0.{Math.floor((Math.random() * 80) + 1)}s.
                            <br/>
                        </Message>
                        <Message>
                            Rakusol : <a href="http://www.rakusol.com"><strong>
                            <ins>http://www.rakusol.com</ins>
                        </strong></a>
                            <br/>
                            ARI : <a href="https://ari-jp.com"><strong>
                            <ins>https://ari-jp.com</ins>
                        </strong></a>
                            <br/>
                        </Message>
                    </div>
                );
                break;
            case "":
                message = null;
                break;
            default:
                message = <Message isError>System: Command not found<br/></Message>;
                break;
        }

        if(command != '') {
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
        });
    }

    render() {
        const {i18n} = this.props;

        return (
            <div>
                <BannerNews {...this.props} />
                <Header {...this.props} activatedMenu={this.props.activatedMenu}/>
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
                                    <Message isCommand>echo "FULL FEATURE COMING SOON"<br/></Message>
                                </Typist>
                                {this.state.isHiddenMessage01 ?
                                    <Message isError>FULL FEATURE COMING SOON<br/></Message>
                                    : null}

                                {/* Go Back Home */}
                                <Typist startDelay={1600}
                                        avgTypingDelay={10}
                                        cursor={typistOption.cursor}
                                        onTypingDone={this.handleTypingDone('02')}>
                                    <Message isCommand>yarn global add tiny-feature-cli<br/></Message>
                                </Typist>
                                {this.state.isHiddenMessage02 ?
                                    <div>
                                        <Message isSuccess>Success Installed "tiny-feature-cli@1.9.0".<br/></Message>
                                        <Message isSuccess>Done in 0.23s.<br/></Message>
                                        <Message isSuccess>
                                            Type "tiny help" for getting command list.<br/></Message>
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
            </div>
        )
    }
}

export default translate()(NotFound);