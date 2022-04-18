import React from "react";
import styled from 'styled-components'
import CelImage from '../../images-suite/image-hero-portrait.png'
import Fade from 'react-reveal/Fade';
import CurvedLine from '../../images-suite/pattern-curved-line-1.svg'

const ContainerSuperSolution = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    max-height: 600px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`


const TextAndOptions = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-column: 1;
    grid-row: 1;
    gap: 30px;
`

const SuperTitle = styled.h1`
    font-weight: 400;
    font-size: 70px;
    grid-column: 1 / 3;
    grid-row: 1;
    margin-top: 60px;
    position: relative;

    span{
        font-size: 70px;
        font-weight: 700;
    }
`

const StyledDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.1px;
    color: #49566D;
    margin-top: 50px;
`

const StyledButton = styled.div`
    width: 256px;
    height: 60px;
    background: #172339;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    font-weight: 700;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageCellphone = styled.img`
    border-radius: 15px;    
    grid-column: 2;
    grid-row: 1;
    z-index: -1;
`

const InfoSuperSolutionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 3;
    align-items: center;
`

const InfoSuperSolution = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    h3{
        font-weight: 700;
        color: #172339;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -0.5px;
    }

    p{
        letter-spacing: 2.5px;
        color: #49566D;
        font-size: 16px;
        line-height: 26px;
    }
`

const SpanSolutionIcon = styled.span`
    font-weight: 700;
    font-size: 60px;

    &:before{
        content: url(${CurvedLine});
        display: inline-block;
        position: absolute;
        top: -70px;
        left: 290px;
    }
`



const SuperSolution = () => {
    return(
        <Fade left>
            <ContainerSuperSolution>
                        <SuperTitle>
                            A <span>super <SpanSolutionIcon>solution</SpanSolutionIcon></span> for your <span>business.</span>
                        </SuperTitle>
                    <TextAndOptions>
                        <StyledDescription>Our marketing and sales automations help you scale your outreach to get more leads for your company. </StyledDescription>
                        <StyledButton>Request Beta Access</StyledButton>
                    </TextAndOptions>

                    <ImageCellphone src = {CelImage}/>

                    <InfoSuperSolutionContainer>
                        <InfoSuperSolution>
                            <h3>2k+</h3>
                            <p>companies</p>
                        </InfoSuperSolution>

                        <InfoSuperSolution>
                            <h3>8</h3>
                            <p>languages</p>
                        </InfoSuperSolution>

                        <InfoSuperSolution>
                            <h3>1.2m</h3>
                            <p>leads</p>
                        </InfoSuperSolution>
                    </InfoSuperSolutionContainer>
            </ContainerSuperSolution>
        </Fade>
    )
}

export default SuperSolution