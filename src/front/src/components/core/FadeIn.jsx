import React, { Component } from 'react';
import Animate from 'react-smooth'

class FadeIn extends Component {
    render() {
        return (
            <Animate {...this.props}
                     from={{ opacity: 0 }}
                     to={{ opacity: 1 }}
                     easing="linear"
                     duration={500}
            >
                {
                    ({ opacity }) => <div style={{ opacity }}>{this.props.children}</div>
                }
            </Animate>
        )
    }
}

export default FadeIn;