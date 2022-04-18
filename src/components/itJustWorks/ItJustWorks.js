import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import JeremyImage from '../../images-suite/image-jeremy-large@2x.webp'
import JeremyImageSmall from '../../images-suite/image-jeremy-small.png'
import CurvedLine from '../../images-suite/pattern-curved-line-2.svg'
import { Container } from './styledcomponents';
import { Work } from './styledcomponents';
import { ImageJeremyStyled } from './styledcomponents';
import { ImageJeremyStyledSmall } from './styledcomponents';
import { Line } from './styledcomponents';
import { ContainerText } from './styledcomponents';
import { TitleStyled } from './styledcomponents';
import { StyledDesc } from './styledcomponents';
import { DatasJeremy } from './styledcomponents';
import { SpanBold } from './styledcomponents';


const ItJustWorks = () => {
    return(
        <Zoom>
            <Container>
                <Work>
                    <ImageJeremyStyled src = {JeremyImage}/>
                    <ImageJeremyStyledSmall src = {JeremyImageSmall}/>
                    <Line src = {CurvedLine}/>
                    <ContainerText>
                        <TitleStyled>It just <span>works.</span></TitleStyled>
                        <StyledDesc>“I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”</StyledDesc>
                        <DatasJeremy>
                            <SpanBold>jeremy robinson</SpanBold>
                            <span>cmo. fylo</span>
                        </DatasJeremy>
                    </ContainerText>
                </Work>
            </Container>
        </Zoom>
    )
}

export default ItJustWorks