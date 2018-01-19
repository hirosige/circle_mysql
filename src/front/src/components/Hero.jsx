import React, {Component} from "react"
import Styled from "styled-components";
import { Media } from "Utilities/style"
import FadeIn from "Components/core/FadeIn"
import TadaIn from "Components/core/TadaIn"
import ContentBox from 'Components/core/ContentBox'

const HeroWrapper = Styled(ContentBox)`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    ${Media.sm`
      padding-left: 1rem;
      padding-right: 1rem;
    `}
`;

const LogoImage = Styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 3px solid whitesmoke;
    background-color: whitesmoke;
`;

const LogoImageName = Styled.img`
    margin: 30px 0;
    height: 60px;
    width: auto;
`;

const TextContent = Styled.div`
    padding: 10px 0;
    color: whitesmoke;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
`;

class Hero extends Component {

    render() {
        const { t } = this.props;
        return (
            <HeroWrapper>
                <TadaIn ms={1000}>
                    <LogoImage src="/public/images/logo-arms-small.png" alt=""/>
                </TadaIn>

                <FadeIn begin={800}>
                    <LogoImageName src="/public/images/logo-arms-name.png" alt=""/>
                    <TextContent>
                        <span dangerouslySetInnerHTML={{ __html: t('hero.greeting') }} />
                    </TextContent>
                </FadeIn>

            </HeroWrapper>
        )
    }

}

export default Hero;