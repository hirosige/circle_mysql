import React, { Component } from 'react';
import Styled from 'styled-components'

const Tada = Styled.span`
    visibility: hidden;

    ${props => props.animate && `
       visibility: visible;
       animation: ${props.ms || 2000}ms tada;
    `}

    @keyframes tada {
      0% {
        opacity: 0;
                transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -15deg);
      }
      
      //5% {
      //  transform: scale3d(1, 1, 1);
      //}

      10%, 20% {
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -15deg);
      }

      30%, 50%, 70%, 90% {
        //transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      }

      //40%, 60%, 80% {
      //  transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      //}

      100% {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }
    }
`;

class TadaIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animate: false
        }
    }

    componentDidMount() {
        this.setState((prevState, props) => ({
            animate: !prevState.animate
        }));
    }


    render() {
        return (
            <Tada ms={this.props.ms} animate={this.state.animate}>{this.props.children}</Tada>
        )
    }
}

export default TadaIn;