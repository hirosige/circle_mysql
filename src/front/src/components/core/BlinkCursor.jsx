import React, { Component } from 'react';
import Styled from 'styled-components'

const Blink = Styled.span`
    animation: 1s blink step-end infinite;

    @keyframes blink {
        from, to {
          color: transparent;
        }
        50% {
          color: #d80d18;
        }
    }
`;

class BlinkCursor extends Component {
    render() {
        return (
            <Blink>_</Blink>
        )
    }
}

export default BlinkCursor;