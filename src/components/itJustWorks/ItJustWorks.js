import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-reveal/Zoom';
import JeremyImage from '../../images-suite/image-jeremy-large@2x.webp'
import JeremyImageSmall from '../../images-suite/image-jeremy-small.png'
import CurvedLine from '../../images-suite/pattern-curved-line-2.svg'


const Container = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    max-height: 600px;
    margin-top: 80px;

    @media (max-width: 1024px){
        max-width: 690px;
        max-height: 865px;
        margin-top: 200px;
    }

    @media (max-width: 590px) {
        margin-top: 500px;
    }
`

const Work = styled.div`
    height: 545px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background: #172339;
    border-radius: 15px; 
    position: relative;

    @media (max-width: 1024px){
        grid-template-columns: auto;
        grid-template-rows: repeat(2, 1fr);
    }
`

const ImageJeremyStyled = styled.img`
    height: 600px;
    position: absolute;
    left: 50px;
    top: -55px;

    @media (max-width: 1024px){
        display: none;
    }
`

const ImageJeremyStyledSmall = styled.img`
    height: 300px;
    position: absolute;
    left: 250px;
    top: -120px;

    @media (min-width: 1025px){
        display: none;
    }

    @media (max-width: 1024px){
        display: block;
    }

`

const Line = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 40%;
    top: 30%;

    @media (max-width: 1024px){
        left: 45%;
        top: 35%;
    }
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 2;
    grid-row: 1;

    @media (max-width: 1024px){
        margin-top: 0 auto;
        text-align: center;
        grid-row: 2;
    }
`

const TitleStyled = styled.h1`
    font-weight: 200;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.5px;
    color: #FAF8F6;

    span{
        font-weight: 400;
    }
`

const StyledDesc = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 35px;
    letter-spacing: 0.1px;
    color: #F3EDE7;
    width: 80%;

    @media (max-width: 1024px){
        margin: 0 auto;
    }
`

const DatasJeremy = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    color: #FAF8F6;
    font-weight: 300;
`

const SpanBold = styled.span`
    font-weight: 700;
    padding-bottom: 15px;
`

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