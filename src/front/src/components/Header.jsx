import React, { Component } from 'react'
import Styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Button, Col, Dropdown, Icon, Layout, Menu as AntdMenu, Row, Select } from 'antd';
import { Media } from 'Utilities/style'
import { getLanguageUrl } from "Utilities/url";
import ContainerFluid from 'Components/core/ContainerFluid'


const ButtonGroup = Button.Group
    , Content     = Layout.Content
    , Option      = Select.Option
;

const Menu = Styled(ButtonGroup)`
      ${Media.xs`
        display: none;
      `}
      
      ${Media.sm`
        display: none;
      `}
    }
`;

const MenuItem = Styled(Button).attrs({
    _exclude: 'active'
})`
    
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 0px;
    border-color: transparent;

    ${props => props.active && `
      border-color: #980b14 !important;
      color: #980b14 !important;
    `}
`;

const Hamburger = Styled(Button)`
  display: none;
  
  ${Media.xs`
    margin-left: 1em;
    display: inline;
  `}
  
  ${Media.sm`
    margin-left: 1em;
    display: inline;
  `}
`;

const HeaderWrapper = Styled(ContainerFluid)`
    min-height: 64px;
    line-height: 64px;
    background-color: #181818;
    color: #e6e6e6;
    display: flex;
    align-items: center;
`;

const Logo = Styled.div`
    display: inline-block;

    & a {
      text-decoration: none;
    }

    user-select: none;
`;

const LogoImage = Styled.img`
    display: inline-block;
    height: 32px;
    width: auto;
    margin-right: 1em;
`;

const LogoName = Styled.span`
    font-weight: bold;
    font-size: 1.2em;
    letter-spacing: .05em;
    color: #e6e6e6;
    text-decoration: none;
`;

class Header extends Component {
    constructor(props) {
        super(props);

        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.handleMenuClick      = this.handleMenuClick.bind(this);
    }

    handleLanguageChange(language) {
        const {match} = this.props;
        // TODO
        window.location.assign(getLanguageUrl(match.url, 'en'));
    }

    handleMenuClick(destination) {
        return (e) => {
            e.preventDefault();
            const {i18n} = this.props;
            // TODO
            this.props.history.push(getLanguageUrl(destination, 'en'))
        }
    }

    activateMenu(menuName) {
        if (menuName === this.props.activatedMenu) {
            return 1;
        }
        return 0;
    }

    render() {
        const {i18n, t} = this.props;
        return (
            <HeaderWrapper>
                <Content>
                    <Row type="flex" justify="space-between">
                        <Col>
                            <Logo>
                                {/*TODO*/}
                                <Link to={getLanguageUrl('/', 'en')}>
                                    <LogoImage src="/public/images/logo-arms-small.png"/>
                                    <LogoImage white style={{height: '24px'}}
                                               src="/public/images/logo-arms-name-white.png"/>
                                    {/*<LogoName>ARMS</LogoName>*/}
                                </Link>
                            </Logo>
                            <Menu>
                                <MenuItem
                                    active={this.activateMenu('home')}
                                    ghost
                                    size="large"
                                    onClick={this.handleMenuClick('/')}
                                    href={'/'}
                                >
                                    {t('header.menu.home')}
                                </MenuItem>
                                <MenuItem
                                    active={this.activateMenu('team')}
                                    ghost
                                    size="large"
                                    onClick={this.handleMenuClick('/team')}
                                    href={'/team'}
                                >
                                    {t('header.menu.team')}
                                </MenuItem>
                                <MenuItem
                                    active={this.activateMenu('blog')}
                                    ghost
                                    size="large"
                                    onClick={this.handleMenuClick('/blog')}
                                    href={'/blog'}
                                >
                                    {t('header.menu.blog')}
                                </MenuItem>
                                <MenuItem
                                    active={this.activateMenu('partners')}
                                    ghost
                                    size="large"
                                    onClick={this.handleMenuClick('/partners')}
                                    href={'/partners'}
                                >
                                    {t('header.menu.partners')}
                                </MenuItem>
                            </Menu>
                        </Col>
                        <Col>
                            {/*TODO*/}
                            <Select size="large" defaultValue={'en'} style={{width: '100px'}}
                                    onSelect={this.handleLanguageChange}>
                                <Option value="en">{t('header.language.english')}</Option>
                                {/*<Option value="th">{t('header.language.thai')}</Option>*/}
                            </Select>

                            <Dropdown overlay={
                                <AntdMenu>
                                    <AntdMenu.Item key="0">
                                        <Link to="/">{t('header.menu.home')}</Link>
                                    </AntdMenu.Item>
                                    <AntdMenu.Item key="1">
                                        <Link to="/team">{t('header.menu.team')}</Link>
                                    </AntdMenu.Item>
                                    <AntdMenu.Item key="2">
                                        <Link to="/blog">{t('header.menu.blog')}</Link>
                                    </AntdMenu.Item>
                                    <AntdMenu.Item key="3">
                                        <Link to="/partners">{t('header.menu.partners')}</Link>
                                    </AntdMenu.Item>
                                </AntdMenu>
                            } trigger={['click']} placement="bottomRight">
                                <Hamburger ghost size="large">{t('header.menu.hamburger')}</Hamburger>
                            </Dropdown>
                        </Col>
                    </Row>
                </Content>
            </HeaderWrapper>
        )
    }

}

export default Header;