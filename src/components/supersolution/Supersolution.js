import React from "react";
import styled from 'styled-components'
import CelImage from '../../images-suite/image-hero-portrait.png'
import Fade from 'react-reveal/Fade';
import CurvedLine from '../../images-suite/pattern-curved-line-1.svg'
import CelImageMobile from '../../images-suite/image-hero-landscape.webp'

const ContainerSuperSolution = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    max-height: 600px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    @media (max-width: 900px){
        max-width: 95%;
        margin: 0 auto;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 590px){
        width: 80%;
        grid-template-columns: auto;
    }
`


const TextAndOptions = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    grid-column: 1;
    grid-row: 1;
    /* gap: 30px; */

    @media (max-width: 900px){
        width: 80%;
        grid-column: 1 / 3;
    }

    @media (max-width: 590px){
        height: 400px;
        grid-row: 1;
        grid-column: 1 / -1;
        margin: 0 auto;
    }

    @media (max-width: 540px){
        height: 370px;
        justify-content: center;
        margin-top: -30px;
    }
   
`

const SuperTitle = styled.h1`
    font-weight: 400;
    font-size: 70px;
    grid-column: 1 / 3;
    grid-row: 1;
    margin-top: 60px;
    position: relative;

    @media (max-width: 900px) {
        font-size: 55px;
        grid-column: 1 / 4;
    }

    @media (max-width: 630px){
        width: 80%;
        font-size: 50px;
    }

    @media (max-width: 590px){
        width: 80%;
        margin: 30px auto;
        grid-row: 1;
        grid-column: 1 / 3;
        font-size: 40px;
    }

    @media (max-width: 540px){
        font-size: 32px;
    }

    @media (max-width: 430px){
        font-size: 28px;
    }

    @media (max-width: 380px){
        font-size: 24px;
    }

    

    span{
        font-size: 70px;
        font-weight: 700;

    @media (max-width: 900px) {
        font-size: 55px;
    }

    @media (max-width: 630px){
        font-size: 50px;
    }

    @media (max-width: 590px){
        grid-row: 1;
        grid-column: 1 / -1;
        font-size: 40px;
        width: 100%;
    }

    @media (max-width: 540px){
        font-size: 32px;
    }

    @media (max-width: 430px){
        font-size: 28px;
    }

    @media (max-width: 380px){
        font-size: 24px;
    }
}
`

const StyledDescription = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.1px;
    color: #49566D;
    margin-top: 50px;

    @media (max-width: 900px){
        margin-top: 150px;
        width: 100%;
        grid-column: 1 / 4;
    }

    @media (max-width: 630px){
        font-size: 16px;
        width: 100%;
        margin-top: 130px;
    }

    @media (max-width: 590px){
        margin-top: 100px;
        font-size: 18px;
        grid-row: 2;
        grid-column: 1 / -1;
    }

    @media (max-width: 540px){
        font-size: 14px;
        grid-row: 2;
        grid-column: 1 / -1;
    }

    @media (max-width: 380px){
        font-size: 12px;
        margin-top: 15px;
    }

    
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
    opacity: 0.9;

    &:hover {
        opacity: 1;
        cursor: pointer;
        background: linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%);
        transition: opacity 2s ease-in;
    }

    @media (max-width: 630px){
        font-size: 14px;
        width: 100%;
        height: 50px;
    }

    @media (max-width: 590px){
        grid-row: 3;
        grid-column: 1 / -1;
        width: 200px;
    }

    @media (max-width: 540px){
        width: 150px;
        height: 35px;
        font-size: 12px;
    }

`

const ImageCellphone = styled.img`
    border-radius: 15px;    
    grid-column: 2;
    grid-row: 1;
    z-index: -1;

    @media (max-width: 900px){  
        grid-column: 3;
        max-width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 630px){
        max-width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 590px){
        display: none;
    }

    
`

const ImageCellphoneTwo = styled.img`

    @media (min-width: 591px){
        display: none;
    }

    @media (max-width: 590px){
        width: 80%;
        display: block;
        grid-row: 4;
        grid-column: 1 / -1;
        margin: 0 auto;
    }

    @media (max-width: 380px){
        grid-row: 2;
        align-self: flex-start;
        margin-top: -80px;
    }

`


const InfoSuperSolutionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    grid-column: 3;
    align-items: center;

    @media (max-width: 900px) {
        align-items: center;
        grid-column: 1 / 4;
        grid-row: 2;
        flex-direction: row;
        text-align: center;
    }

    @media (max-width: 590px){
        grid-row: 5;
        grid-column: 1 / -1;
        flex-direction: column;
        gap: 20px;
    }
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

    @media (max-width: 630px){
        h3{
            font-weight: 700;
            color: #172339;
            font-size: 40px;
            line-height: 56px;
            letter-spacing: -0.5px;
        }

        p{
            letter-spacing: 2.5px;
            color: #49566D;
            font-size: 14px;
            line-height: 26px;
        }
    }
`

const SpanSolutionIcon = styled.span`
    font-weight: 700;
    font-size: 60px;

    &:before{
        content: "";
        background-image: url(${CurvedLine});
        width: 400px;
        height: 50px;
        background-repeat: no-repeat;
        display: inline-block;
        position: absolute;
        top: -50px;
        left: 290px;

        @media (max-width: 900px) {
        content: "";
        background-image: url(${CurvedLine});
        display: inline-block;
        position: absolute;
        width: 320px;
        height: 20px;
        left: 200px;
        top: -30px
    }

    @media (max-width: 630px) {
        content: "";
        background-image: url(${CurvedLine});
        position: absolute;
        left: 165px;
        top: -30px
    }

    @media (max-width: 630px) {
        content: "";
        background-image: url(${CurvedLine});
        width: 320px;
        height: 15px;
        left: 110px;
        top: -30px
    }

    @media (max-width: 540px){
        width: 250px;
        height: 10px;
        left: 55px;
        top: -15px;
    }

    @media (max-width: 430px){
        width: 220px;
        height: 10px;
        left: 30px;
    }

    @media (max-width: 380px){
        left: 10px;
        width: 220px;
        height: 8px;
    }
    
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
                    <ImageCellphoneTwo src = {CelImageMobile} /> 

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