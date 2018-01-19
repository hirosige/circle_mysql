import React, { Component } from 'react'
import Container from 'Components/core/Container'
import ContentBox from 'Components/core/ContentBox'
import TerminalBox from 'Components/core/TerminalBox'
import BlinkCursor from "Components/core/BlinkCursor";
import Styled from "styled-components";
import { Media } from "Utilities/style"
import { List, Button } from 'antd';
import { ShareButtons, generateShareIcon } from 'react-share';

const {
          FacebookShareButton,
          GooglePlusShareButton,
          TwitterShareButton,
          EmailShareButton,
      } = ShareButtons;

const FacebookIcon   = generateShareIcon('facebook');
const TwitterIcon    = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const EmailIcon      = generateShareIcon('email');

const ContentWrapper = Styled(Container)`
    margin: 30px auto;
`;

const Content = Styled(ContentBox)`
`;

const Centered = Styled.div`
    text-align: center;
    padding-bottom: 20px;
`;

const ListWrapper = Styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    padding-bottom: 10px;
`;

const HalfWrapper = Styled.div`
    display: flex;
    justify-content: space-between;    


    & > div:first-child {
      padding-right: 10px;
    }

    ${Media.xs`
        flex-direction: column;
        padding-right: 0px;
    `}
`;

const ShareIconWrapper = Styled.div`
    
    & span {
      position: relative;
      display: inline-block;
      padding-right: 5px;
      cursor: pointer;
    }

    & span:last-child {
      padding-right: 0;
    }
    
    ${Media.xs`
        padding-top: 15px;
    `}
`;

class LatestPost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

        this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
    }

    handleSeeMoreClick() {
        this.props.history.push('/blog');
    }

    componentWillMount() {
        const shareTitle = `ARMS Thailand Blog:`;
        const shareUrl   = `http://www.arms-asia.com/blog/`;
        const listData   = [];
        for (let i = 1; i <= 1; i++) {
            listData.push({
                id:         i,
                title:      `New Website available now`,
                content:    `Hey friend, check out our new and improved website!`,
                imageUrl:   `` || `/public/images/image-placeholder.jpg`,
                shareTitle: `${shareTitle} New Website available now`,
                shareUrl:   `${shareUrl}${i}`,
            });
        }

        this.setState({posts: listData});
    }

    render() {
        const {t} = this.props;

        return (
            <ContentWrapper>
                <TerminalBox location="Blog">
                    <Content>

                        {this.state.posts.length > 0 ?
                            <div>
                                <Centered>
                                    <h1>
                                        <span dangerouslySetInnerHTML={{__html: t('home.content.latest-blog-title')}}/>
                                        <BlinkCursor/>
                                    </h1>
                                    <p dangerouslySetInnerHTML={{__html: t('home.content.latest-blog-description')}}/>
                                </Centered>
                                <List
                                    itemLayout="vertical"
                                    grid={{
                                        gutter: 32,
                                        xs:     1,
                                        sm:     1,
                                        md:     2,
                                    }}
                                    dataSource={this.state.posts}
                                    renderItem={item => (
                                        <List.Item>
                                            <ListWrapper>
                                                <HalfWrapper>
                                                    <div>
                                                        <strong>{item.title}</strong>
                                                        <p>
                                                            {item.content}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <img style={{height: '100px'}} alt="logo"
                                                             src={item.imageUrl}/>
                                                    </div>
                                                </HalfWrapper>

                                                <ShareIconWrapper>
                                                    <span>
                                                        <FacebookShareButton
                                                            url={item.shareUrl}
                                                            quote={item.shareTitle}
                                                            className={'share-icon'}>
                                                        <FacebookIcon
                                                            size={20}
                                                            round/>
                                                        </FacebookShareButton>
                                                    </span>

                                                    <span>
                                                        <GooglePlusShareButton
                                                            url={item.shareUrl}
                                                            className={'share-icon'}>
                                                            <GooglePlusIcon
                                                                size={20}
                                                                round/>
                                                        </GooglePlusShareButton>
                                                    </span>

                                                    <span>
                                                        <TwitterShareButton
                                                            url={item.shareUrl}
                                                            title={item.shareTitle}
                                                            className={'share-icon'}>
                                                            <TwitterIcon
                                                                size={20}
                                                                round/>
                                                        </TwitterShareButton>
                                                    </span>

                                                    <span>
                                                        <EmailShareButton
                                                            url={item.shareUrl}
                                                            subject={item.shareTitle}
                                                            body={this.props.content}
                                                            className={'share-icon'}>
                                                            <EmailIcon
                                                                size={20}
                                                                round/>
                                                        </EmailShareButton>
                                                    </span>
                                                </ShareIconWrapper>
                                            </ListWrapper>
                                        </List.Item>
                                    )}
                                />
                                <Centered>
                                    <Button type="primary" ghost size="large" onClick={this.handleSeeMoreClick}>
                                        <span
                                            dangerouslySetInnerHTML={{__html: t('home.content.latest-blog-seemore')}}/>
                                    </Button>
                                </Centered>
                            </div>
                            :
                            <Centered>
                                <span dangerouslySetInnerHTML={{__html: t('home.content.latest-blog-empty')}}/>
                            </Centered>
                        }
                    </Content>
                </TerminalBox>
            </ContentWrapper>
        )
    }

}

export default LatestPost;