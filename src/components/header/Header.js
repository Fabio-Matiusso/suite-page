import React from "react";
import styled from 'styled-components'
import Logo from '../../images-suite/logo.svg'
import {HeaderStyled} from './styledcomponents'
import { LogoHeader } from "./styledcomponents";
import { ButtonHeader } from "./styledcomponents";

const Header = () => {
    return(
        <HeaderStyled>
            <LogoHeader src = {Logo}/>

            <ButtonHeader>Request Beta Access</ButtonHeader>
        </HeaderStyled>
    )
}

export default Header