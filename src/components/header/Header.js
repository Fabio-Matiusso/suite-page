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

    @media (max-width: 900px){
        width: 90%;
        height: 70px;
    }

    @media (max-width: 590px){
        width: 65%;
        height: 70px;
    }

    @media (max-width: 380px){
        width: 60%;
    }
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
    font-weight: 700;

    &:hover{
        background-color: #172339;
        color: white;
        transition: all 0.2s linear;
    }

    @media (max-width: 590px){
        width: 180px;
        height: 48px;
    }

    @media (max-width: 540px){
        width: 150px;
        height: 44px;
        font-size: 12px;
    }

    @media (max-width: 380px){
        width: 100px;
        height: 30px;
        font-size: 9px;
    }
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