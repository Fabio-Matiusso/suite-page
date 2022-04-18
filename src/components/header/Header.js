import React from "react";
import styled from 'styled-components'
import Logo from '../../images-suite/logo.svg'

const HeaderStyled = styled.header`
    max-width: 1110px;
    height: 56px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

const LogoHeader = styled.img`
    width: 78px;
    height: 24px;
`

const ButtonHeader = styled.div`
    width: 219px;
    height: 50px;
    border: 1px solid #172339;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
`

const Header = () => {
    return(
        <HeaderStyled>
            <LogoHeader src = {Logo}/>

            <ButtonHeader>Request Beta Access</ButtonHeader>
        </HeaderStyled>
    )
}

export default Header