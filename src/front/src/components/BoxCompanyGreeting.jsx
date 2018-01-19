import React, { Component } from 'react'
import Container from 'Components/core/Container'
import ContentBox from 'Components/core/ContentBox'
import TerminalBox from 'Components/core/TerminalBox'
import Styled from "styled-components";
import { Media } from "Utilities/style"
import { Carousel } from 'antd';
import BlinkCursor from "Components/core/BlinkCursor";

const ContentWrapper = Styled(Container)`
     margin: 30px auto;
`;

const Content = Styled(ContentBox)`
    text-align: center;
`;

const Greeting = Styled(Content)`

    & h1 {
      font-size: 50px;
      font-weight: 400;
      

      ${Media.xs`
        font-size: 30px;
      `}
      
      ${Media.sm`
        font-size: 40px;
      `}
    }
`;

const Hero = Styled.div`
    display: flex;
    justify-content: space-between;
    
    & > div:first-child {
        position: relative;
        padding: 0 1em;
        width: 40%;
        align-items: center;
        justify-content: flex-end;
        display: flex;
        z-index: 10;

        & h1 {
            color: whitesmoke;
            z-index: 1;
            font-size: 32px;
            background-color: #444444;
            padding: 20px 30px;
            margin-right: -100px;
            font-weight: normal;
        }
    }

    & > div:last-child {
        position: relative;
        width: 60%;
        height: 400px;
        z-index: 9;
    }

    ${Media.xs`
        flex-direction: column;

        & div:first-child {
            width: 100%;
            justify-content: center;

            & h1 {
                font-size: 24px;
                margin-right:0px;
                margin-bottom: -100px;
                font-weight: bold;
            }
        }

        & div:last-child {
          width: 100%;
        }
    `}

    ${Media.sm`
        flex-direction: column;

        & div:first-child {
            width: 100%;
            justify-content: center;

            & h1 {
                font-size: 28px;
                margin-right:0px;
                margin-bottom: -100px;
                font-weight: bold;
            }
        }

        & div:last-child {
          width: 100%;
        }
    `}
`;

const HeroCarousel = Styled(Carousel)`
    background-color: #bd5152;
    height: 400px;
    overflow: hidden;
    
    & .slick-list {
      display: none;
      
      ${props => props.show && `
        display: block;
      `}
    }
    
    & .slick-slide {
      overflow: hidden;
    }
    
    & img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
`;

const KeyIngredient01 = Styled.div`
    width: 100%;
    text-align: center;
    background-color: #bf5050;
    color: whitesmoke;

    & h1 {
      color: whitesmoke;
    }
`;

const KeyIngredient02 = Styled.div`
    width: 100%;
    text-align: center;
    background-color: #444444;
    color: whitesmoke;
    display: flex;
    justify-content: flex-end;
    
    & h1 {
      color: whitesmoke;
    }
    
    & > div:first-child {
      width: 50%;
    }

    & > div:last-child {
      width: 50%;
    }
        
    ${Media.xs`
        flex-direction: column;
        
        & div:first-child {
            width: 100%;
        }
        
        & div:last-child {
          width: 100%;
        }
    `}
    
    ${Media.sm`
        flex-direction: column;
        
        & div:first-child {
            width: 100%;
        }
        
        & div:last-child {
          width: 100%;
        }
    `}
`;

class CompanyGreetingBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showCarouselImage: false
        }
    }

    componentDidMount() {
        this.setState((prevState, props) => ({
            showCarouselImage: !prevState.showCarouselImage
        }));
    }

    render() {
        const { t } = this.props;
        return (
            <ContentWrapper>
                <TerminalBox location="ARMS Thailand">
                    <Greeting>
                        <h1>
                            <span dangerouslySetInnerHTML={{ __html: t('home.content.greeting-title')}}/>
                            <BlinkCursor/>
                        </h1>
                        <p dangerouslySetInnerHTML={{ __html: t('home.content.greeting-description')}} />
                    </Greeting>

                    <Hero>
                        <div>
                            <h1 dangerouslySetInnerHTML={{ __html: t('home.content.hero-title')}} />
                        </div>
                        <div>
                            <HeroCarousel autoplay show={this.state.showCarouselImage}>
                                <div><img src="/public/images/sample/sample-01.jpg" alt=""/></div>
                                <div><img src="/public/images/sample/sample-02.jpg" alt=""/></div>
                                <div><img src="/public/images/sample/sample-03.jpg" alt=""/></div>
                                <div><img src="/public/images/sample/sample-04.jpg" alt=""/></div>
                            </HeroCarousel>
                        </div>
                    </Hero>

                    <Content>
                        <h1>
                            <span dangerouslySetInnerHTML={{ __html: t('home.content.story-title')}}/>
                            <BlinkCursor/>
                        </h1>
                        <p dangerouslySetInnerHTML={{ __html: t('home.content.story-description')}} />
                    </Content>

                    <KeyIngredient01>
                        <Content>
                            <h1 dangerouslySetInnerHTML={{ __html: t('home.content.key-ingredient-01-title')}} />
                            <p dangerouslySetInnerHTML={{ __html: t('home.content.key-ingredient-01-description')}} />
                        </Content>
                    </KeyIngredient01>

                    <KeyIngredient02>
                        <div>
                            <Content>
                                <h1 dangerouslySetInnerHTML={{ __html: t('home.content.key-ingredient-02-title')}} />
                                <p dangerouslySetInnerHTML={{ __html: t('home.content.key-ingredient-02-description')}} />
                            </Content>
                        </div>
                        <div>
                            <Content>
                                <h1 dangerouslySetInnerHTML={{ __html: t('home.content.key-ingredient-03-title')}} />
                                <p dangerouslySetInnerHTML={{ __html: t('home.content.key-ingredient-03-description')}} />
                            </Content>
                        </div>
                    </KeyIngredient02>
                </TerminalBox>
            </ContentWrapper>
        )
    }

}

export default CompanyGreetingBox;