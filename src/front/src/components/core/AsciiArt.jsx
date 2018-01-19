import React, { Component } from 'react';
import Styled from 'styled-components';
import { Media } from 'Utilities/style';

const Pre = Styled.pre`
    font-size: .7rem;
    line-height: .9rem;
    
    ${Media.sm`
        font-size: 0.6rem;
        line-height: .8rem;
    `}
    
    ${Media.xs`
        font-size: 0.5rem;
        line-height: .7rem;
    `}
`;

class AsciiArt extends Component {
    render() {
        return (<Pre>{`
                        ##         .
                  ## ## ##        ==
               ## ## ## ## ##    ===
           /"""""""""""""""""\\___/ ===
           \\______ o           __/
             \\    \\         __/
              \\____\\_______/
 _                 _   ____     _            _
| |__   ___   ___ | |_|___ \\ __| | ___   ___| | _____ _ __
| '_ \\ / _ \\ / _ \\| __| __) / _\` |/ _ \\ / __| |/ / _ \\ '__|
| |_) | (_) | (_) | |_ / __/ (_| | (_) | (__|   <  __/ |
|_.__/ \\___/ \\___/ \\__|_____\\__,_|\\___/ \\___|_|\\_\\___|_|`}</Pre>)
    }
}

export default AsciiArt;
