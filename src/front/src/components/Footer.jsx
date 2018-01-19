import React, { Component } from 'react'
import ContainerFluid from 'Components/core/ContainerFluid'
import Styled from "styled-components";
import { Media } from "Utilities/style";
import { Link } from "react-router-dom"

const FooterWrapper = Styled(ContainerFluid)`
    background-color: #181818;
    color: whitesmoke;

    & a {
        color: whitesmoke;
        text-decoration: none;
    }
`;

const Top = Styled.div`
    height: 300px;
    display: none;
`;

const Bottom = Styled.div`
    margin: 0 -1.15rem;
    padding: 15px 0;
    background-color: rgba(0,0,0, .5);
`;

const NavList = Styled.div`
    padding-top: 20px;
    list-style: none;
    text-align: center;

    & > li {
        padding: 0 .5em;
        display: inline-block;
        text-transform: uppercase;
        font-weight: bold;
    }
`;

const Copy  = Styled.div`
    text-align: center;
    padding-bottom: 20px;
    font-size: .88em;
`;


class Footer extends Component {

    render() {
        const { t } = this.props;
        return (
            <FooterWrapper>
                <Top></Top>
                <Bottom>
                    <NavList>
                        <li>
                            <Link to="/">{t('header.menu.home')}</Link>
                        </li>
                        <li>
                            <Link to="/team">{t('header.menu.team')}</Link>
                        </li>
                        <li>
                            <Link to="/blog">{t('header.menu.blog')}</Link>
                        </li>
                        <li>
                            <Link to="/partners">{t('header.menu.partners')}</Link>
                        </li>
                    </NavList>
                    <Copy>
                        ARMS (Thailand) Co., Ltd. © 2018. All Rights Reserved.
                    </Copy>
                </Bottom>
            </FooterWrapper>
        )
    }

}

export default Footer;